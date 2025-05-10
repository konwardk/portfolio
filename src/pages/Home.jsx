import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const Home =()=>{


    return (

    <div className="min-h-screen">

    {/* Theme Toggle */}
       
    {/* Background Effects */}
        <Background/>
    {/* Navbar */}
        <Navbar/>

    {/* Main Content */}
        <HeroSection/>

    {/* Footer */}
    </div>
    );

}