/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "../../data/site";
import { PhoneCall } from "lucide-react";

export const FloatingCTA: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          id="floating-cta"
          href="#consult"
          className="flex items-center gap-2 px-5 py-3.5 bg-brand-coral hover:bg-brand-coral-hover text-white font-extrabold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 min-h-[48px] text-base md:text-lg tracking-wide border border-white/10"
        >
          <PhoneCall size={18} className="animate-pulse" />
          <span>{siteConfig.ctaLabel}</span>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
