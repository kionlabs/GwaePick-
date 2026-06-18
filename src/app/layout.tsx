/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingCTA } from "../components/layout/FloatingCTA";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 antialiased selection:bg-brand-purple/10 selection:text-brand-purple">
      {/* Scroll indicator or accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-purple via-brand-purple to-brand-coral z-50"></div>

      {/* Header component */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full flex flex-col">
        {children}
      </main>

      {/* Footer component */}
      <Footer />

      {/* Floating CTA component for thumbs usability */}
      <FloatingCTA />
    </div>
  );
};

export default Layout;
