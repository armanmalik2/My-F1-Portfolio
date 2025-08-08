import Home1 from "./Home/page";
import Header from "./Header/page";
import Skills from "./Skills/page";
import Experience from "./Experience/page";
import ContactForm from "./ContactForm/page";
import ProjectsSection from "./Project/page";
import About2 from "./About/page";

export default function Home() {
  return (
    <>
    <div>
      <Header />
      <Home1 />
      <About2 />
      <Skills />
      <ProjectsSection />
      <Experience />
      <ContactForm />
      </div>
    </>
  );
}
