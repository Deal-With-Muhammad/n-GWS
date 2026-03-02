"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import {
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineClock,
  HiOutlineLockClosed,
  HiOutlineSparkles,
  HiOutlineArrowRight,
} from "react-icons/hi2";

function FinalCloseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-200/20 dark:bg-yellow-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-2xl shadow-gray-200/50 dark:shadow-black/50">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />

            <CardBody className="p-8 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                {/* Relaxed Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold mb-8"
                >
                  <HiOutlineClock className="w-4 h-4" />
                  <span>No Pressure. No Obligation.</span>
                </motion.div>

                {/* Headline - Split for Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                    You Don't Need to Change{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500">
                      Anything Today.
                    </span>
                  </h2>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl charmonman-bold font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                      But You Should Know
                    </span>
                    <br />
                    <span className="text-gray-900 dark:text-white">
                      Your Position.
                    </span>
                  </h2>
                </motion.div>

                {/* Divider with Icon */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex items-center justify-center gap-4 mb-8"
                >
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <HiOutlineEye className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
                </motion.div>

                {/* Body Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4 mb-10"
                >
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Most business owners have never reviewed their corporate
                    structure from a transition perspective.
                  </p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
                  >
                    <HiOutlineSparkles className="w-4 h-4 text-yellow-500" />
                    <span>If you haven't, that's normal.</span>
                  </motion.div>

                  <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Let's review it privately.
                  </p>
                </motion.div>

                {/* Primary CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="mb-8"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(234, 179, 8, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-lg font-bold rounded-full shadow-xl shadow-yellow-500/30 transition-all overflow-hidden"
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <HiOutlineCalendar className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">
                      Schedule Your Private Corporate Review
                    </span>
                    <HiOutlineArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <HiOutlineLockClosed className="w-4 h-4 text-emerald-500" />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineShieldCheck className="w-4 h-4 text-blue-500" />
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineClock className="w-4 h-4 text-purple-500" />
                    <span>30 Minutes</span>
                  </div>
                </motion.div>
              </div>
            </CardBody>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-20" />
          </Card>
        </motion.div>

        {/* Floating Elements Around Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="hidden lg:block absolute top-1/4 -left-12"
        >
          <div className="w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-4 rotate-[-8deg]">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 flex items-center justify-center">
              <HiOutlineShieldCheck className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="hidden lg:block absolute bottom-1/4 -right-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-3 rotate-[12deg]">
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
              <HiOutlineLockClosed className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCloseSection;
