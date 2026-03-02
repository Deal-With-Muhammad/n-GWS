"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Card } from "@heroui/react";
import {
  HiOutlineBanknotes,
  HiOutlineBuildingLibrary,
  HiOutlineChartBar,
  HiOutlineArrowTrendingUp,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCalculator,
} from "react-icons/hi2";

function RealizationMomentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],
    [0, 1, 1, 0.8],
  );

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const wealthItems = [
    {
      icon: HiOutlineChartBar,
      label: "Revenue",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: HiOutlineBuildingLibrary,
      label: "Assets",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: HiOutlineArrowTrendingUp,
      label: "Growth",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const craItems = [
    { icon: HiOutlineBanknotes, label: "Cash", isCheck: false },
    {
      icon: HiOutlineBuildingLibrary,
      label: "Buildings",
      isCheck: true,
      strike: true,
    },
    { icon: HiOutlineChartBar, label: "Goodwill", isCheck: true, strike: true },
    {
      icon: HiOutlineArrowTrendingUp,
      label: "Inventory",
      isCheck: true,
      strike: true,
    },
  ];

  return (
    <section
      id="realization"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 origin-left z-50"
      />

      <div className="relative  py-36  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div style={{ y: textY, opacity }} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-8"
          >
            <HiOutlineExclamationTriangle className="w-4 h-4" />
            <span>The Critical Insight</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl charmonman-bold sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Liquidity{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                Matters.
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-500/20 -skew-x-6 origin-left"
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* The Contrast Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
          {/* What Owners Think */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full bg-gray-900/50 border border-gray-800 backdrop-blur-sm overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <HiOutlineCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Business Owners Think About
                    </h3>
                    <p className="text-sm text-gray-400">
                      Traditional wealth metrics
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {wealthItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-colors group"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-gray-200">
                        {item.label}
                      </span>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.6 + index * 0.1,
                          type: "spring",
                        }}
                        className="ml-auto w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* What CRA Requires */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-red-950/30 to-gray-900 border border-red-500/20 backdrop-blur-sm overflow-hidden relative">
              {/* Alert Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">
                  <HiOutlineExclamationTriangle className="w-3 h-3" />
                  REALITY
                </span>
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                    <HiOutlineBanknotes className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      The CRA Requires
                    </h3>
                    <p className="text-sm text-gray-400">
                      Tax obligations need liquidity
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {craItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        item.strike
                          ? "bg-gray-800/30 border-gray-800 opacity-50"
                          : "bg-yellow-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/10"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          item.strike
                            ? "bg-gray-700 text-gray-500"
                            : "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-lg font-semibold ${
                          item.strike
                            ? "text-gray-500 line-through"
                            : "text-yellow-400"
                        }`}
                      >
                        {item.label}
                      </span>
                      {!item.strike && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.8,
                            type: "spring",
                            stiffness: 200,
                          }}
                          className="ml-auto"
                        >
                          <span className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                            ONLY
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </motion.div>
                      )}
                      {item.strike && (
                        <div className="ml-auto w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* The Arrow Connection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-yellow-500" />
              <div className="w-4 h-4 border-b-2 border-r-2 border-yellow-500 rotate-45 -mt-2" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
              <span className="px-4 py-2 bg-gray-800 text-yellow-400 text-sm font-bold rounded-full border border-yellow-500/30">
                THE GAP
              </span>
            </div>
          </div>
        </motion.div>

        {/* The Solution Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 overflow-hidden relative">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="relative p-8 lg:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 mb-6 shadow-xl shadow-yellow-500/20"
              >
                <HiOutlineClock className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Planning ahead prevents{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                  forced decisions
                </span>{" "}
                later.
              </h3>

              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Without liquidity planning, you may face fire sales, emergency
                loans, or tax penalties that could have been avoided.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-full shadow-lg shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all"
                >
                  <HiOutlineCalculator className="w-5 h-5" />
                  <span>Calculate Your Liquidity Needs</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800 text-gray-300 font-semibold rounded-full border border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <span>See Case Studies</span>
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
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              number: "60%",
              label: "Of business sales fail due to liquidity issues",
              color: "text-red-400",
            },
            {
              number: "$250K+",
              label: "Average unexpected tax bill",
              color: "text-yellow-400",
            },
            {
              number: "90%",
              label: "Of wealth is tied in illiquid assets",
              color: "text-orange-400",
            },
            {
              number: "3-5",
              label: "Years needed for proper planning",
              color: "text-emerald-400",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div
                className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default RealizationMomentSection;
