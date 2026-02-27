import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Service } from "../components/Service";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            {/* Background Effects */}
            <Background />
            
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <About />
                <Projects />
                <Service />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};