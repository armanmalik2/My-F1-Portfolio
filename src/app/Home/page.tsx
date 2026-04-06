'use client'
import Link from "next/link";
import { Download, FolderOpen } from "lucide-react";

const Home1 = () => {
    return(
    <div className="Home1">
        <div className="min-h-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-6 md:px-12 py-12 relative z-10 mt-10">
  
  {/* Text Content */}
  <div className="max-w-2xl space-y-6 text-center md:text-left animate-fadeUp">
    
    {/* Greeting */}
    <div className="space-y-3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        Hey, I'm{' '}
        <span className="block md:inline mt-2 md:mt-0 text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
          Arman
        </span>
        {' '}
        <span className="inline-block animate-wave">👋</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 font-medium">
        DSA and Full-Stack (MERN) Enthusiast 
      </p>
    </div>

    {/* Description */}
    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
      Passionate about building intelligent solutions and crafting beautiful web experiences. 
      Let's create something amazing together.
    </p>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
      <a 
        href="/Arman_Malik_Software_Engineer_Resume.pdf" 
        download
        className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95"
        >
        <Download size={20} className="group-hover:animate-bounce" />
        <span>Download Resume</span>
      </a>
      
      <Link 
        href="/Project"
        className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 active:scale-95"
      >
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
        <span>See Projects</span>
      </Link>
    </div>

    {/* Social Links */}
    <div className="flex gap-4 justify-center md:justify-start pt-4">
      <a 
        href="https://github.com/armanmalik2" 
        className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a 
        href="https://www.linkedin.com/in/arman-malik-a2359a265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
        className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
        >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a 
        href="https://wa.me/916395362560" 
        className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.8 11.8 0 0012.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.14 1.6 5.95L0 24l6.36-1.67a11.86 11.86 0 005.7 1.45h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44zM12.07 21.4a9.5 9.5 0 01-4.85-1.33l-.35-.21-3.78.99 1.01-3.69-.23-.38a9.48 9.48 0 01-1.45-5.02c0-5.25 4.27-9.52 9.52-9.52 2.54 0 4.92.99 6.72 2.79a9.44 9.44 0 012.79 6.73c0 5.25-4.27 9.52-9.52 9.52zm5.38-7.13c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.03 1.01-1.03 2.47 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34z"/>
        </svg>
      </a>
    </div>

  </div>

  {/* Profile Image */}
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
    <div className="relative">
      <div className="w-64 h-84 md:w-80 md:h-80 lg:w-96 lg:h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl animate-bg">
        <img 
          src="image.png"
          alt="Arman" 
          className="scale- w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
    </div>
  </div>

</div>

{/* Add this to your global CSS for gradient animation */}
<style jsx>{`
/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Slow fade + slide (text entry) */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeUp {
  animation: fadeUp 1s ease forwards;
}

/* Glow pulse */
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.4); }
  50% { box-shadow: 0 0 40px rgba(99,102,241,0.8); }
}
.animate-glow {
  animation: glow 2.5s ease-in-out infinite;
}

/* Button shimmer */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.animate-shimmer {
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}

/* Social icon float delay */
.animate-float-delay {
  animation: float 4s ease-in-out infinite;
  animation-delay: 1s;
}

/* Image slow rotate (very subtle premium effect) */
@keyframes rotateSlow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(3deg); }
}
.animate-tilt {
  animation: rotateSlow 6s ease-in-out infinite alternate;
}

/* Background gradient move */
@keyframes bgMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-bg {
  background-size: 200% 200%;
  animation: bgMove 10s linear infinite alternate;
}
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-15deg); }
  }
  
  .animate-wave {
    animation: wave 2s ease-in-out infinite;
    transform-origin: 70% 70%;
  }

  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
`}</style></div>
      
    );
};

export default Home1;