/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { siteConfig } from "../../data/site";

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-gray-50 border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
        {/* Brand Information Section */}
        <div className="space-y-3 max-w-md">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded-md bg-brand-purple/10 flex items-center justify-center text-brand-purple font-black text-xs">
              M
            </span>
            <span className="font-bold text-gray-900 tracking-tight">
              {siteConfig.name}
            </span>
          </div>
          <p className="font-medium text-gray-700 font-sans tracking-tight">
            "{siteConfig.slogan}"
          </p>
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            직접 과외를 가르치고 우리 아이들에게 가장 가깝게 다가갔던 선생님들이 모여,
            상담 전문 선생님이 되어 학부모님의 고민을 털어내 드립니다.
          </p>
        </div>

        {/* Contact info and Business registration info */}
        <div className="space-y-2 text-xs text-gray-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
            <div>
              <span className="font-semibold text-gray-500 mr-1">상담/연락처:</span>
              <span className="text-gray-600">{siteConfig.contact.phone}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 mr-1">이메일:</span>
              <span className="text-gray-600">{siteConfig.contact.email}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 mr-1">사업자번호:</span>
              <span className="text-gray-600">{siteConfig.contact.businessNumber}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-500 mr-1">주소:</span>
              <span className="text-gray-600 font-sans">{siteConfig.contact.address}</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200/50 text-[11px]">
            <span>{siteConfig.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
