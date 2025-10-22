"use client";
import React, { useEffect } from "react";
import { Button } from "@heroui/react";
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
      <div className="min-h-screen py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="sm:max-w-7xl ">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Headline */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl sm:text-5xl charmonman-bold lg:text-6xl text-center sm:text-left font-bold sm:leading-16"
                >
                  <span className="text-gray-900 dark:text-white">
                    Helping Toronto Professionals{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                    Keep More
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {" "}
                    of What They Earn
                  </span>
                </motion.h1>
              </div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-center text-gray-600 sm:text-left dark:text-gray-400 max-w-xl leading-relaxed"
              >
                Hi, I am Sadeed! With personalized tax strategies and
                wealth-building solutions, I'm ready to help you protect your
                income and grow your future.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block sm:flex space-y-2  flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r w-full sm:w-auto from-yellow-500 to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all px-8"
                  radius="full"
                >
                  Book a Free Strategy Call
                </Button>

                <Button
                  size="lg"
                  variant="flat"
                  className="text-gray-700 w-full sm:w-auto dark:text-gray-300 font-semibold"
                  radius="full"
                  endContent={
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  }
                >
                  Learn more
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-4"
              >
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    200+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Clients Served
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    99%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Happy Clients
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Five Star Reviews
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Image with Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative Circle Background */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 flex justify-center"
                >
                  <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 blur-3xl"></div>
                </motion.div>

                {/* Main Image Container */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="relative sm:w-[480px] sm:h-[480px] rounded-full overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl">
                    <img
                      src="sadeed.png"
                      alt="Sadeed - Financial Advisor"
                      className="w-full h-full object-cover"
                    />

                    {/* Certified Badge */}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute bottom-[42] right-38 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
                >
                  <span className="text-sm">✓</span>
                  Certified Advisor
                </motion.div>
                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-12 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
                >
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-[280] -left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
                >
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute top-32 -left-6 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl"
                >
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
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
