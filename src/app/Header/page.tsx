import { Briefcase, BriefcaseBusiness, CodeXml, FolderOpen, Headset, Home, SkipBack, UsersRound } from "lucide-react";
import Link from "next/link";
const Header = () => {
    return(
<div>
  {/* Desktop Header */}
  <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link href="/">
        <h3 className="font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
          ARMAN
        </h3>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-8 items-center text-white">
          <li className="group relative">
            <Link href="/" className="hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="group relative">
            <Link href="/About" className="hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="group relative">
            <Link href="/Skills" className="hover:text-cyan-400 transition-colors font-medium">
              Skills
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="group relative">
            <Link href="/Project" className="hover:text-cyan-400 transition-colors font-medium">
              Projects
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="group relative">
            <Link href="/Experience" className="hover:text-cyan-400 transition-colors font-medium">
              Experience
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li>
            <Link href="/Contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  </div>

  {/* Mobile Bottom Navigation */}
  <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-2xl">
    <div className="grid grid-cols-5 gap-1 px-2 py-3">
      
      <Link href="/">
        <div className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 active:scale-90 transition-all cursor-pointer">
          <Home size={22} />
          <span className="text-xs font-medium">Home</span>
        </div>
      </Link>

      <Link href="/About">
        <div className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 active:scale-90 transition-all cursor-pointer">
          <UsersRound size={22} />
          <span className="text-xs font-medium">About</span>
        </div>
      </Link>

      <Link href="/Project">
        <div className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 active:scale-90 transition-all cursor-pointer">
          <FolderOpen size={22} />
          <span className="text-xs font-medium">Projects</span>
        </div>
      </Link>

      <Link href="/Skills">
        <div className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 active:scale-90 transition-all cursor-pointer">
          <CodeXml size={22} />
          <span className="text-xs font-medium">Skills</span>
        </div>
      </Link>

      <Link href="/Experience">
        <div className="flex flex-col items-center gap-1 text-white hover:text-cyan-400 active:scale-90 transition-all cursor-pointer">
          <BriefcaseBusiness size={22} />
          <span className="text-xs font-medium">Experience</span>
        </div>
      </Link>

    </div>

    {/* Floating Contact Button for Mobile */}
    <Link href="/Contact">
      <div className="fixed bottom-20 right-4 z-50 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-2xl shadow-purple-500/50 hover:scale-110 active:scale-95 transition-all cursor-pointer">
        <Headset size={24} className="text-white" />
      </div>
    </Link>
  </div>
</div>
    );
};

export default Header;