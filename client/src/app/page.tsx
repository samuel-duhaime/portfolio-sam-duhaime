"use client";

import { useState } from "react";
import Topbar from "../components/navigations/topnav/Topnav";
import Menu from "../components/navigations/menu/Menu";
import Intro from "../components/sections/intro/Intro";
import Projets from "../components/sections/projets/Projets";
import CV from "../components/sections/cv/CV";
import Contact from "../components/sections/contact/Contact";
import Modal from "../components/vendor/modal/ChatBot";

// HomePage
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Intro />
      <Projets />
      <CV />
      <Contact />
      <Modal />
    </div>
  );
}
