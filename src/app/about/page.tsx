import React from "react";
import Intro from "@/components/About/Intro";
import AboutMe from "@/components/About/AboutMe";
import MoreDetail from "@/components/About/MoreDetail";
import Resume from "@/components/About/Resume";
import Mockups from "@/components/About/Mockups"; // Ensure this is correct
import Closing from "@/components/About/Closing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="px-[6vw]">
      <Navbar />
      <main>
        <Intro />
        <AboutMe />
        <MoreDetail />
        <Resume />
        <Mockups /> {/* Uncomment this */}
        <Closing />
      </main>
      <Footer />
    </div>
  );
}