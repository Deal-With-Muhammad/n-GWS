"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardBody } from "@heroui/react";
import {
  HiOutlineArrowPath,
  HiOutlineWallet,
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlineMapPin,
  HiOutlineCalendar,
  HiOutlinePhone,
} from "react-icons/hi2";

function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const services = [
    {
      icon: HiOutlineArrowPath,
      title: "Prepare for business transition",
      description:
        "Smooth succession planning for your corporation's next chapter",
      color: "from-blue-500 to-blue-600",
      delay: 0.1,
    },
    {
      icon: HiOutlineWallet,
      title: "Structure retained earnings efficiently",
      description: "Optimize how your corporate surplus works for you",
      color: "from-emerald-500 to-emerald-600",
      delay: 0.2,
    },
    {
      icon: HiOutlineCurrencyDollar,
      title: "Create liquidity strategies",
      description: "Ensure cash is available when you need it most",
      color: "from-yellow-500 to-yellow-600",
      delay: 0.3,
    },
    {
      icon: HiOutlineBuildingOffice,
      title: "Plan access to corporate surplus",
      description: "Smart withdrawal strategies that minimize tax impact",
      color: "from-purple-500 to-purple-600",
      delay: 0.4,
    },
    {
      icon: HiOutlineUsers,
      title: "Protect long-term family continuity",
      description: "Keep your business legacy secure for generations",
      color: "from-red-500 to-red-600",
      delay: 0.5,
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden ">
      {/* Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 to-transparent dark:from-gray-900/50" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-yellow-100/30 dark:bg-yellow-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-semibold mb-6"
          >
            <HiOutlineMapPin className="w-4 h-4" />
            <span>Serving Ontario Business Owners</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl charmonman-bold sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight mb-6"
          >
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
              Do
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Simple strategies. Real results. No confusion.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: service.delay, duration: 0.6 }}
            >
              <Card
                className="group h-full bg-gray-50 dark:bg-gray-900 border-0 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-none hover:shadow-xl hover:shadow-yellow-500/10"
                isPressable
              >
                <CardBody className="p-8">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                          {service.title}
                        </h3>
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: service.delay + 0.3,
                            type: "spring",
                          }}
                        >
                          <HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        </motion.div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-0 shadow-xl shadow-yellow-500/20">
              <CardBody className="p-8 flex flex-col justify-center items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <HiOutlineCalendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ready to get started?
                </h3>
                <p className="text-yellow-100 text-sm mb-6">
                  Book your free consultation today
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-6 bg-white text-yellow-600 font-bold rounded-full hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </motion.button>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Simple Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Three simple steps to secure your corporate future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We understand your business structure and goals",
              },
              {
                step: "02",
                title: "Custom Strategy",
                desc: "We design a plan tailored to your corporation",
              },
              {
                step: "03",
                title: "Implementation",
                desc: "We execute with clarity and ongoing support",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-600">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>

                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-yellow-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Trusted by 200+ Ontario corporations • Confidential consultations •
            No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
