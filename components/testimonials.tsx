"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardBody } from "@heroui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Sadeed helped me create a financial plan that saved me thousands in taxes. His expertise in tax optimization is unmatched, and he took the time to explain everything in terms I could understand.",
    author: "Michael Chen",
    role: "Software Engineer",
    rating: 5,
  },
  {
    quote:
      "Professional, patient, and knowledgeable — highly recommended! Working with Sadeed has been a game-changer for our family's financial future. He's always available and genuinely cares about our success.",
    author: "Sarah Johnson",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote:
      "I was overwhelmed with retirement planning until I met Sadeed. He simplified everything and created a clear roadmap for my financial future. I finally feel confident about retirement.",
    author: "David Martinez",
    role: "Marketing Director",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Slider animation
      gsap.from(sliderRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-yellow-600/10 dark:bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-950/30 rounded-full border border-yellow-200 dark:border-yellow-800">
            <span className="text-xl">💬</span>
            <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400 uppercase tracking-wide">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl charmonman-bold sm:text-5xl font-bold text-gray-900 dark:text-white">
            What Clients Say About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Working Together
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from real people who trusted me with their financial
            future
          </p>
        </div>

        {/* Testimonial Slider */}
        <div ref={sliderRef} className="relative">
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 border-yellow-500/20 dark:border-yellow-600/20 bg-white dark:bg-gray-900 shadow-xl">
                    <CardBody className="p-8 sm:p-12 space-y-6">
                      {/* Quote Icon */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white shadow-lg">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 shadow-lg hover:border-yellow-500 dark:hover:border-yellow-600 hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 shadow-lg hover:border-yellow-500 dark:hover:border-yellow-600 hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
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
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-yellow-500 to-yellow-600"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
