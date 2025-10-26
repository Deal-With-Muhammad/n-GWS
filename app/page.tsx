"use client";
import React, { useEffect } from "react";
import { Button, Image } from "@heroui/react";
import { useState } from "react";
import { LoaderWindow } from "../components/loaderWindow/index";
import ScrollIntroduction from "@/components/aboutSection";
import MarqueeSection from "@/components/marquee-section";
import About from "@/components/aboutSection";
import styles from "@/styles/Home.module.scss";
import Curve from "@/components/Contact/Curve";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Contact from "@/components/Contact";
import { slide } from "@/components/Contact/anim/anim";
import ServicesPreview from "@/components/Services";
import TestimonialsSection from "@/components/testimonials";
import Preloader from "@/components/Preloader";
import Hero from "@/components/HeroSection/page";

export default function HeroSection() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Hero />
      {/* hero section */}
      <div className="w-full">
        <section className="relative">
          <About />
        </section>
        <section className="relative">
          <MarqueeSection />
        </section>
        <section className="relative">
          <ServicesPreview />
        </section>
        <TestimonialsSection />
        <Curve>
          <motion.main
            className={styles.main}
            ref={container}
            initial="initial"
            animate="open"
            variants={slide}
            exit="closed"
          >
            <motion.div style={{ height }} className={styles.circleContainer}>
              <div className={styles.circle}></div>
            </motion.div>
            <Contact />
          </motion.main>
        </Curve>
      </div>
    </>
  );
}
