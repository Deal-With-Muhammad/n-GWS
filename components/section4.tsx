"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import {
  HiOutlineBuildingLibrary,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineNewspaper,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import { LuQuote } from "react-icons/lu";

function AuthoritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Subtle Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-100/30 dark:bg-yellow-900/10 rounded-full blur-3xl" />

        {/* Maple Leaf Pattern (Subtle Canadian reference) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] dark:opacity-[0.03]">
          <svg
            width="800"
            height="800"
            viewBox="0 0 100 100"
            fill="currentColor"
            className="text-red-600"
          >
            <path d="M50 5 L55 25 L75 20 L60 35 L80 45 L60 50 L70 70 L50 60 L50 95 L45 60 L25 70 L35 50 L15 45 L35 35 L20 20 L40 25 Z" />
          </svg>
        </div>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-semibold">
            <HiOutlineCheckBadge className="w-4 h-4" />
            <span>Proven Strategy</span>
          </span>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-2xl shadow-gray-200/50 dark:shadow-black/50">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500" />

            <CardBody className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Side - Visual Authority */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  {/* Rogers Logo Placeholder / Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-xl shadow-red-600/20"
                    >
                      <HiOutlineBuildingLibrary className="w-12 h-12 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <HiOutlineShieldCheck className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Rogers Communications
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Canadian Business Legacy
                  </p>

                  {/* Source Badge */}
                  <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400">
                    <HiOutlineNewspaper className="w-3 h-3" />
                    <span>Public Estate Record</span>
                  </div>
                </motion.div>

                {/* Right Side - Content */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                      A Well-Known{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                        Canadian
                      </span>{" "}
                      Example
                    </h2>
                  </motion.div>

                  {/* Quote Block */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="relative pl-6 border-l-4 border-yellow-500"
                  >
                    <LuQuote className="absolute -left-3 -top-2 w-6 h-6 text-yellow-500 bg-white dark:bg-gray-900" />
                    <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                      When Ted Rogers passed away, corporate-owned life
                      insurance played a strategic role in maintaining liquidity
                      and protecting the family business structure.
                    </p>
                  </motion.blockquote>

                  {/* Key Insight */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <HiOutlineLightBulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          It wasn't accidental.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          It was planned.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600" />

                  {/* Bottom Message */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    // viewport={{ once }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-500 dark:text-gray-400 text-sm"
                  >
                    No tax jargon. Just authority.
                  </motion.p>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: HiOutlineShieldCheck,
              title: "Asset Protection",
              desc: "Preserve business value for next generation",
            },
            {
              icon: HiOutlineLightBulb,
              title: "Strategic Planning",
              desc: "Designed for long-term liquidity needs",
            },
            {
              icon: HiOutlineBuildingLibrary,
              title: "Legacy Continuation",
              desc: "Keep family business structure intact",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 transition-all duration-300 h-full">
                <CardBody className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:from-yellow-100 group-hover:to-yellow-200 dark:group-hover:from-yellow-900/30 dark:group-hover:to-yellow-800/30 transition-all flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            This same strategy is available to Canadian corporation owners like
            you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Explore Your Options</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default AuthoritySection;
