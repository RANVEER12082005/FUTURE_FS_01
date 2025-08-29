import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="w-[85vw] mx-auto">
      <NavBar />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
