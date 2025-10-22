"use client";
import React, { useEffect, useRef } from "react";
import { Card, CardBody } from "@heroui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const paragraph4Ref = useRef(null);
  const valuesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading text reveal
      const headingSplit = new SplitText(headingRef.current, {
        type: "words,chars",
      });
      gsap.from(headingSplit.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Subheading reveal
      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Paragraph reveals with word-by-word color transition
      [paragraph1Ref, paragraph2Ref, paragraph3Ref, paragraph4Ref].forEach(
        (ref) => {
          const split = new SplitText(ref.current, { type: "words" });

          // Set initial state - all words gray/dim
          gsap.set(split.words, {
            color: "#9ca3af", // gray-400
            opacity: 0.3,
          });

          // Animate words to full color on scroll
          gsap.to(split.words, {
            color: "#374151", // gray-700 for light mode
            opacity: 1,
            stagger: 0.03,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          });
        }
      );

      // Values cards animation
      gsap.from(valuesRef.current, {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 bg-white dark:bg-gray-950"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-600/5 dark:bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-950/30 rounded-full border border-yellow-200 dark:border-yellow-800">
            <span className="text-xl">👋</span>
            <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 uppercase tracking-wide">
              Introduction
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-4xl charmonman-bold text-center sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            More Than Just Financial Advice
          </h2>

          <p
            ref={subheadingRef}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Building lasting relationships through trust, expertise, and genuine
            care
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg leading-relaxed mb-16">
          <p ref={paragraph1Ref} className="text-gray-700 dark:text-gray-300">
            I believe that financial planning isn't about complex jargon or
            one-size-fits-all solutions. It's about understanding your unique
            story, your dreams, and the life you want to build for yourself and
            your family.
          </p>

          <p ref={paragraph2Ref} className="text-gray-700 dark:text-gray-300">
            Throughout my career, I've had the privilege of working with
            hundreds of professionals and business owners across Toronto,
            helping them navigate everything from tax optimization to retirement
            planning. Each client's journey is different, and that's what makes
            this work so rewarding.
          </p>

          <p ref={paragraph3Ref} className="text-gray-700 dark:text-gray-300">
            My approach is simple: listen first, educate always, and create
            strategies that actually work for your life. I don't believe in
            pushing products or making promises I can't keep. Instead, I focus
            on building trust through transparency, delivering results through
            proven methods, and being there for you every step of the way.
          </p>

          <p ref={paragraph4Ref} className="text-gray-700 dark:text-gray-300">
            Whether you're just starting your financial journey or looking to
            optimize what you've already built, I'm here to guide you with
            expertise, empathy, and a commitment to your long-term success.
          </p>
        </div>
      </div>
    </section>
  );
}
