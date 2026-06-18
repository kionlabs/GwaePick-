/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface CTAButtonProps {
  id?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  onClick,
  href,
  className = "",
  children,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold text-white bg-brand-coral hover:bg-brand-coral-hover active:scale-[0.98] transition-all duration-150 rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-coral/30 cursor-pointer min-h-[48px] px-6 py-3 text-base md:text-lg tracking-wide text-center word-break-keep-all";

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={`${baseStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
};
