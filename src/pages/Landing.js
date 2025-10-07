import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundCarousel from '../components/carousel/BackgroundCarousel';

const Landing = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/auth');
  };

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}

      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-scenery-with-a-staircase-leading-to-the-sky-42974-large.mp4"
          type="video/mp4"
        />
      </video> */}


      {/* Top Header with Logo + College Name */}
      <header className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.M1q0n44vny5M4OUvsYjA0AAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="SRMS College Logo"
          className="w-14 h-14 rounded-full border-2 border-white shadow-md"
        />
        <h2 className="text-1xl md:text-2xl font-bold text-white drop-shadow-md">
          SRMS College of Engineering, Technology & Research
        </h2>
      </header>

      {/* Main Content */}
    





      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 w-full max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white animate-fade-in-down [text-shadow:_0_4px_16px_theme(colors.primary/50%)]">
          Technovaganza 2025
        </h1>
        <p className="mt-4 text-lg md:text-xl font-normal text-slate-300 dark:text-slate-400 max-w-2xl">
          SRMS CET&R
        </p>
        <p className="mt-2 text-md md:text-lg font-light text-slate-300 dark:text-slate-400">
          Annual Technical Festival
        </p>

        <div className="mt-12">
          <button
            onClick={handleEnter}
            className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-lg bg-primary px-8 text-lg font-bold text-white transition-all duration-300 ease-in-out glow-shadow-hover focus:outline-none focus:ring-4 focus:ring-primary/50 hover:scale-105"
          >
            <span className="z-10">Enter Technovaganza 2025</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary/0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>
          </button>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Landing;
