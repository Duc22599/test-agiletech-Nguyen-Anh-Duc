import { Divider } from "@mui/material";
import React from "react";
import { Section } from "../Body";
import { Footer } from "../Footer";
import { Header } from "../Header";
import SlideContent from "../SliderShowImg";

export const HomePage = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Section />
      </section>
      <section>
        <SlideContent />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
