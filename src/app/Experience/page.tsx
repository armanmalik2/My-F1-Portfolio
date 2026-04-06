import { User,CodeXml, Building2, LocateIcon, MapPin, Timer, Calendar, Hourglass } from "lucide-react";
import Header from "../Header/page";
const Experience = () => {
    const tech = ["React", "TypeScript", "Node.js", "Express.js", "Postgres", "Tailwind CSS", "SASS", "Docker", "Redis", "many more", "Socket.io", "JWT"]
    const Achievements = ['Built responsive MERN stack applications for diverse business needs', 
        'Designed reusable UI components ensuring cross-browser compatibility', 
        'Integrated third-party APIs including Stripe for payments and Firebase for real-time features', 
        'Participated in Agile methodology and collaborative code reviews',
        'Optimized application performance and user experience']
    return(
        <>
        <Header />
        <div className="flex flex-col justify-center items-center  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pb-10">
            <div className=" w-full h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold flex">Work <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span></h1><br/>
                <p className="text-xl w-[80vw] text-center">Gained valuable experience developing scalable solutions and playing a key role in innovative, cutting-edge projects</p>
            </div>
            <div className="h-fit bg-gradient-to-br from-slate-600 via-slate-800 to-slate-600 bg-transparent max-w-93/100 min-w-80 border-2 border-blue-500/0 rounded-2xl p-10 shadow1 hover:scale-101">
    {/* <div className="scale-90 w-full bg-gradient-to-br from-slate-600 bg-n via-slate-800 to-slate-600 rounded-3xl p-8 md:p-10"> */}
                <h1 className="font-bold text-3xl mb-5 flex"><CodeXml className="icons size-10 text-blue-500"/> Web Developer</h1>
                <h1 className="flex">
                    <span className="opacity-75 mt-0 flex"><Building2 className="size-5 mr-1" />Cyberfort Tech</span>
                    <span className="opacity-75 ml-10 flex"><MapPin className="size-5 mr-1" /> Remote</span>
                </h1>
                <h1 className="mt-5 flex gap-2">
                    <span className="px-3 py-1 scale-100 bg-blue-500/60 backdrop-blur-sm border border-blue-400/30 text-blue-300 flex rounded-full text-xs font-semibold"><Calendar className="size-4 mr-1" />June 2025 - Dec 2025</span>
                    {/* <span className="text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-blue-500 flex"><Calendar className="size-4 mr-1" />June 2025 - Dec 2025</span> */}
                    <span className="px-3 py-1 scale-100 bg-blue-500/60 backdrop-blur-sm border border-blue-400/30 text-blue-300 flex rounded-full text-xs font-semibold"><Hourglass className="size-4 mr-1"/>Full-time</span>
                </h1>
                
                <h1 className="mt-5">
                    <span className="opacity-75 text-xl">Building responsive MERN stack apppcations for businesses with focus on user experience and performance optimization.</span>
                </h1>
                <h1 className="mt-5 text-2xl">Key Achievements:</h1>
                <div>
                    {Achievements.map((i,idx) =>  <h1 key={idx} className="mt-5 opacity-75 flex items-center" ><p className="mr-2 w-3 h-3 rounded-2xl bg-blue-500" ></p>{i}</h1> )}
                    </div>
                <h1 className="m-5 ml-0 text-2xl">Technologies Used:</h1>
                <div className="flex flex-wrap gap-4">
                    {/* {tech.map((i,idx) => <span key={idx} className="text-[12px] border-1 rounded-2xl p-1 pr-2 pl-2 text-blue-500 flex " >{i}</span> )} */}
                    {tech.map((i,idx) =><span key={idx} className="px-3 py-1 scale-110 bg-blue-500/60 backdrop-blur-sm border border-blue-400/30 text-blue-300 rounded-full text-xs font-semibold">{i}</span> )}
                </div>
            </div><br/>
        </div>
        </>
    );
};

export default Experience;