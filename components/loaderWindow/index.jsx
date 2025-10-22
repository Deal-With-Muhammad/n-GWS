"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export const LoaderWindow = ({ setLoaderFinished }) => {
  const overflowTopRef = useRef();
  const overflowBottomRef = useRef();

  const containerRef = useRef();

  const loadingText10Ref = useRef();
  const loadingText20Ref = useRef();
  const loadingText40Ref = useRef();

  useEffect(() => {
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/Observer"),
      import("gsap/SplitText"),
    ]).then(([gsapModule, , , splitTextModule]) => {
      const gsap = gsapModule.default;
      const SplitText = splitTextModule.default;
      gsap.registerPlugin(SplitText);

      gsap.to(overflowTopRef.current, {
        y: "-100%",
        duration: 1.3 * 7,
        ease: "power1.out",
      });

      gsap.to(overflowBottomRef.current, {
        y: "100%",
        duration: 1.3 * 7,
        ease: "power1.out",
      });

      // if (displayed == 100) {
      const chars10 = loadingText10Ref.current.querySelectorAll(
        `.${styles.loadingTextChar} > span`
      );
      const chars20 = loadingText20Ref.current.querySelectorAll(
        `.${styles.loadingTextChar} > span`
      );
      const chars40 = loadingText40Ref.current.querySelectorAll(
        `.${styles.loadingTextChar} > span`
      );

      const Y_INITIAL = -100;

      const tl = gsap.timeline({
        onComplete: () => {
          if (typeof setLoaderFinished === "function") {
            setLoaderFinished(true);
          }
        },
      });
      // First animation (series 1)
      tl.to(chars10, {
        y: `${Y_INITIAL}%`,
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.05,
        delay: 0.6,
      });

      tl.to(
        loadingText10Ref.current.querySelector(`p`),
        {
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.05,
        },
        ">-50%" // start immediately after previous
      );

      tl.to(
        chars10,
        {
          y: `${Y_INITIAL * 2}%`,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.05,
          onStart: () => {
            gsap.to(loadingText10Ref.current.querySelector(`p`), {
              opacity: 0,
              duration: 0.2,
              ease: "power3.out",
              stagger: 0.05,
            });
          },
        },

        "+=0" // start immediately after previous
      );

      tl.to(
        chars20,
        {
          y: `${Y_INITIAL}%`,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.05,
        },
        "+=0" // start at the same time as previous (or adjust as needed)
      );

      tl.to(
        loadingText20Ref.current.querySelector(`p`),
        {
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.05,
        },
        ">-50%" // start immediately after previous
      );

      tl.to(
        chars20,
        {
          y: `${Y_INITIAL * 2}%`,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.05,
          onStart: () => {
            gsap.to(loadingText20Ref.current.querySelector(`p`), {
              opacity: 0,
              duration: 0.2,
              ease: "power3.out",
              stagger: 0.05,
            });
          },
        },
        "+=0" // start immediately after previous
      );
      tl.to(
        chars40,
        {
          y: `${Y_INITIAL}%`,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.05,
        },
        "+=0" // start at the same time as previous (or adjust as needed)
      );

      tl.to(
        loadingText40Ref.current.querySelector(`p`),
        {
          opacity: 1,
          duration: 0.2,
          ease: "power3.out",
          stagger: 0.05,
        },
        ">-50%" // start immediately after previous
      );

      tl.to(
        chars40,
        {
          y: `${Y_INITIAL * 2}%`,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.05,
          onStart: () => {
            gsap.to(loadingText40Ref.current.querySelector(`p`), {
              opacity: 0,
              duration: 0.2,
              ease: "power3.out",
              stagger: 0.05,
            });
          },
        },
        "+=0" // start immediately after previous
      );

      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.05,
        },
        "+=0" // start immediately after previous
      );
    });
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.containerWrapper}>
        <div className={styles.overflowTop} ref={overflowTopRef}></div>
        <div className={styles.overflowBottom} ref={overflowBottomRef}></div>

        <div className={styles.header}>
          <h1 ref={loadingText10Ref} className={styles.loadingText}>
            <p className={styles.loadingTextSubLeft}>001</p>
            {"Build".split("").map((char) => (
              <div className={styles.loadingTextChar}>
                <span>{char}</span>
              </div>
            ))}
          </h1>
          <h1 ref={loadingText20Ref} className={styles.loadingText}>
            <p className={styles.loadingTextSubLeft}>002</p>
            {"Secure".split("").map((char) => (
              <div className={styles.loadingTextChar}>
                <span>{char}</span>
              </div>
            ))}
          </h1>
          <h1 ref={loadingText40Ref} className={styles.loadingText}>
            <p className={styles.loadingTextSubLeft}>003</p>
            {"Freedom".split("").map((char) => (
              <div className={styles.loadingTextChar}>
                <span>{char}</span>
              </div>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};
