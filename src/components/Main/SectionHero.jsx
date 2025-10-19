"use client";

/* eslint-disable react/jsx-key */
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Item3 } from "./HeroModel/Coins";
import "./main.css";
import {
  Shield,
  BarChart,
  PiggyBank,
  Briefcase,
  Home,
  Coins,
} from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const techLogos = [
  { name: "Wealth Management", icon: Briefcase },
  { name: "Investment Planning", icon: BarChart },
  { name: "Insurance Solutions", icon: Shield },
  { name: "Retirement Planning", icon: Coins },
  { name: "Tax Optimization", icon: PiggyBank },
  { name: "Home Ownership", icon: Home },
];

export const SectionHero = () => {
  // REFS
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef1 = useRef();
  const buttonCircleRef1 = useRef();
  const buttonRef2 = useRef();
  const logosWrapperRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  // GSAP ANIMATIONS
  useEffect(() => {
    gsap.set(titleRef.current, { opacity: 1 });

    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        delay: 0.4,
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.02,
        duration: 0.75,
        ease: "power1",
      }
    );

    // description text animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.9,
    });

    // buttons animation
    gsap.to(buttonRef1.current, {
      delay: 1.1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
    });
    gsap.to(buttonRef2.current, {
      delay: 1.4,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
    });

    // logos wrapper animation
    gsap.to(logosWrapperRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.9,
    });
  }, []);

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <section className="hero">
      <video
        className="absolute opacity-40 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero- " />
                <h1 className="headline hero-headline white" ref={titleRef}>
                  Plan Smarter. <br /> Invest Better.
                </h1>
              </div>
              <p
                className="big-description grey opacity-blur"
                ref={descriptionRef}
              >
                I work with high-achieving individuals to build lasting
                financial plans that protect what matters today — and grow your
                wealth for tomorrow.
              </p>
            </div>
            <div className="hero-buttons-row">
              <button
                className="button button-transparent-border opacity-blur"
                ref={buttonRef1}
              >
                <div className="button-content">
                  <span className="small-description">Learn More</span>
                  <span className="small-description">Learn More</span>
                </div>
                <div className="button-circle" ref={buttonCircleRef1}>
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>
              <button
                className="button button-transparent-border opacity-blur"
                ref={buttonRef2}
              >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div>
          </div>
          <div
            className="hero-content-right"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Canvas
              style={{
                pointerEvents: "auto",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
              camera={{ position: [2, 0, 10], fov: 35 }}
            >
              <Suspense fallback>
                <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                  <Item3 />
                </Float>
                <Environment preset="sunset" />
                <OrbitControls
                  maxPolarAngle={Math.PI / 2}
                  enableZoom={false}
                  enableRotate={true}
                  enablePan={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="hero-content-bottom opacity-blur" ref={logosWrapperRef}>
          <Marquee
            gradient={true}
            gradientColor={[0, 0, 0]} // RGB array, no alpha
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
          >
            {techLogos.map((logo, i) => (
              <div
                className="flex items-center justify-center mx-4 p-2 px-4 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black/10 transition-all duration-300 group"
                key={i}
              >
                <div className="text-black/70 group-hover:text-black transition-colors duration-300">
                  <logo.icon size={24} />
                </div>
                <span className="ml-3 text-sm font-medium text-black/60 group-hover:text-black/90 transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description text-black">Drag</p>
      </div>
    </section>
  );
};
