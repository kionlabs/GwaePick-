/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../../data/site";
import { CTAButton } from "../ui/CTAButton";

export const Header: React.FC = () => {
  return (
    <header id="site-header" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-6">
          <a href="#hero" className="flex items-center space-x-2 group">
            <span className="w-8 h-8 rounded-lg bg-brand-purple flex items-center justify-center text-white font-black text-lg shadow-sm">
              M
            </span>
            <span className="font-extrabold text-xl tracking-tight text-gray-900 group-hover:text-brand-purple transition-colors">
              {siteConfig.name}
            </span>
          </a>

          {/* Nav Links (Hidden on mobile, elegant on bigger displays) */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600">
            {siteConfig.navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-brand-purple transition-colors py-2 border-b-2 border-transparent hover:border-brand-purple/20"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <div>
          <CTAButton
            id="header-cta"
            href="#consult"
            className="!min-h-[40px] !py-2 !px-4 !text-sm sm:!text-base shadow-xs"
          >
            {siteConfig.ctaLabel}
          </CTAButton>
        </div>
      </div>
    </header>
  );
};
