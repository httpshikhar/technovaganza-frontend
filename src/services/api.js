import axios from 'axios';

const API = axios.create({
  baseURL: 'https://technovaganza-backend.onrender.com/api',
});

// Add token to requests - FIXED FOR BOTH USER AND ADMIN
API.interceptors.request.use((config) => {
  // Try both user token and admin token
  const userToken = localStorage.getItem('token');
  const adminToken = localStorage.getItem('adminToken');
  const token = userToken || adminToken;
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log('🔐 Token added to request:', config.url, token.substring(0, 20) + '...');
  } else {
    console.log('❌ No token found for request:', config.url);
  }
  return config;
});

// Add response interceptor for debugging
API.interceptors.response.use(
  (response) => {
    console.log('✅ API Success:', response.config.url, response.status);
    return response;
  },
  (error) => {
    console.error('❌ API Error:', error.config?.url, error.response?.status, error.message);
    
    // Auto-logout on 401 errors
    if (error.response?.status === 401) {
      console.log('🔄 Auto-logout due to 401 error');
      // Clear both tokens to be safe
      localStorage.removeItem('token');
      localStorage.removeItem('adminToken');
      localStorage.removeItem('user');
      localStorage.removeItem('adminUser');
      
      // Redirect to login page if not already there
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth APIs
export const registerUser = (userData) => API.post('/auth/register', userData);
export const loginUser = (userData) => API.post('/auth/login', userData);

// Admin Auth APIs
export const adminLogin = (adminData) => API.post('/admin/login', adminData);

// User APIs
export const getUserDashboard = () => API.get('/users/dashboard');
export const registerForSoloEvent = (eventData) => API.post('/users/register-solo', eventData);

// Event APIs
export const getAllEvents = () => API.get('/events');
export const getEventById = (id) => API.get(`/events/${id}`);

// Team APIs
export const createTeam = (teamData) => API.post('/teams/create', teamData);
export const validateTeamMember = (pid) => API.post('/teams/validate-member', { pid });

// Admin APIs
export const createEvent = (eventData) => API.post('/admin/events', eventData);
export const getAdminEvents = () => API.get('/admin/events');
export const getStatistics = () => API.get('/admin/statistics');
export const deleteEvent = (id) => API.delete(`/admin/events/${id}`);

// Admin Export APIs
export const exportEventParticipants = (eventId, college = '') => 
  API.get(`/admin/export/event/${eventId}${college ? `?college=${college}` : ''}`, 
    { responseType: 'blob' }
  );

export const exportAllParticipants = (college = '') => 
  API.get(`/admin/export/all-participants${college ? `?college=${college}` : ''}`, 
    { responseType: 'blob' }
  );

export const exportByCollege = (college) => 
  API.get(`/admin/export/college/${college}`, 
    { responseType: 'blob' }
  );

export default API;