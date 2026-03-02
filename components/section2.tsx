"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import {
  HiOutlineQuestionMarkCircle,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineShieldExclamation,
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingOffice,
} from "react-icons/hi2";

function CuriosityHookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const questions = [
    {
      icon: HiOutlineUsers,
      text: "What happens when I pass this to my children?",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: HiOutlineCurrencyDollar,
      text: "What happens if I need to access this money?",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: HiOutlineShieldExclamation,
      text: "What happens if something unexpected occurs?",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-yellow-400/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-semibold mb-6"
          >
            <HiOutlineBuildingOffice className="w-4 h-4" />
            <span>The Reality Check</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl charmonman-bold sm:text-5xl font-bold text-gray-900 dark:text-white max-w-3xl mx-auto leading-tight mb-6">
            Most Corporations Grow.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Very Few Are Structured for Transition.
            </span>
          </h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Over time, your corporation builds retained earnings. But few
                business owners ask the critical questions that determine their
                legacy.
              </p>

              {/* Question Cards */}
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card
                      className="bg-gray-50 dark:bg-gray-900/50 border-0 shadow-none hover:shadow-lg transition-shadow duration-300"
                      isPressable
                    >
                      <CardBody className="flex flex-row items-center gap-4 p-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${question.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          <question.icon className="w-6 h-6" />
                        </div>
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                          {question.text}
                        </p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Hook */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl -mr-16 -mt-16" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                  <HiOutlineArrowTrendingUp className="w-5 h-5" />
                  <span>The Truth</span>
                </div>
                <p className="text-lg leading-relaxed text-gray-200">
                  In Canada, certain events can create large tax obligations.
                </p>
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-xl font-semibold text-white">
                    The issue isn't avoiding tax.
                  </p>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                    It's preparing for it.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="aspect-[4/3] relative">
                <img
                  src="https://images.stockcake.com/public/5/5/8/5582f199-0c57-4abc-94a8-331be8539ee1_large/corporate-strategy-discussion-stockcake.jpg"
                  alt="Corporate Strategy Discussion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                      Canadian Business Owners
                    </p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      73%
                    </p>
                  </div>
                  <div className="h-12 w-px bg-gray-200 dark:bg-gray-700" />
                  <div className="flex-1 px-6">
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                      Don't have a formal succession plan in place for their
                      corporation
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <HiOutlineQuestionMarkCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-yellow-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-dashed border-blue-400/20 rounded-full"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Is your corporation prepared for what's next?
          </p>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <span>Discover Your Options</span>
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
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
}

export default CuriosityHookSection;
