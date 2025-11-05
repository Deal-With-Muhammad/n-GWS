"use client";
import About from "@/components/aboutSection";
import Curve from "@/components/Contact/Curve";
import { title } from "@/components/primitives";
import ServicesPreview from "@/components/Services";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/Home.module.scss";
import { useRef } from "react";
import Contact from "@/components/Contact";
import { slide } from "@/components/Contact/anim/anim";

export default function AboutPage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div>
      <About />
      <section className="relative">
        <ServicesPreview />
      </section>
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
  );
}
