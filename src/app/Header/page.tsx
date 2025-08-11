import { Briefcase, BriefcaseBusiness, CodeXml, FolderOpen, Headset, Home, SkipBack, UsersRound } from "lucide-react";
import Link from "next/link";
const Header = () => {
    return(
        <div>
            <div className="Header m-0 p-10 pt-7 flex justify-between items-center fixed top-0 z-20 h-[10vh] w-full bg-slate-800">
                <h3 className="font-extrabold text-5xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">ARMAN</h3>
                <ul className="flex gap-[5%] items-center w-2/5 ">
                    <li className="cursor-pointer"><Link href="/">Home</Link></li>
                    <li className="cursor-pointer"><Link href="/About">About</Link></li>
                    <li className="cursor-pointer"><Link href="/Skills">Skills</Link></li>
                    <li className="cursor-pointer"><Link href="/Project">Projects</Link></li>
                    <li className="cursor-pointer"><Link href="/Experience">Experience</Link></li>
                    <li className="cursor-pointer"><Link href="/ContactForm">Contact</Link></li>
                </ul>
            </div>
            <div className="Header-Bottom flex m-0 p-2  justify-between items-center fixed bottom-0 z-20 h-[7vh] w-full bg-slate-800">
                <ul className="flex justify-between items-center w-full ">
                    <li className="cursor-pointer"><Link href="/"><Home /><p className="text-sm">Home</p></Link></li>
                    <li className="cursor-pointer"><Link href="/About"><UsersRound /><p>About</p></Link></li>
                    <li className="cursor-pointer"><Link href="/Skills"><CodeXml /><p>Skills</p></Link></li>
                    <li className="cursor-pointer"><Link href="/Project"><FolderOpen /><p>Projects</p></Link></li>
                    <li className="cursor-pointer"><Link href="/Experience"><BriefcaseBusiness /><p>Experience</p></Link></li>
                    <li className="cursor-pointer"><Link href="/ContactForm">< Headset /><p>Contact</p></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;