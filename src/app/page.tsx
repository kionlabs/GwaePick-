/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { siteConfig, ExamReformFact } from "../data/site";
import { 
  Sparkles, 
  GraduationCap, 
  Quote, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Compass,
  ArrowDownCircle,
  HelpCircle,
  BookOpen
} from "lucide-react";
import { motion } from "motion/react";
import { CTAButton } from "../components/ui/CTAButton";

// Import the generated high-quality consulting and tutoring image
import heroImage from "../assets/images/consulting_session_1781770235349.jpg";

export const Page: React.FC = () => {
  // state to manage active 2028 reform fact card
  const [selectedFactId, setSelectedFactId] = useState<string>("fact1");

  // get current active fact details
  const activeFact = siteConfig.examReformFacts.find(f => f.id === selectedFactId) || siteConfig.examReformFacts[0];

  return (
    <div className="w-full bg-white text-gray-900">
      
      {/* ==========================================
          [HERO 1] MASSIVE PRIMARY BRAND HERO (클래식 교실 과외 상담 최적화 & 이미지 2 실체화)
          ========================================== */}
      <section
        id="hero"
        className="relative min-h-[95vh] lg:min-h-[100vh] flex items-center justify-center bg-radial from-brand-purple-light/80 via-white to-transparent pt-12 pb-20 lg:py-28 overflow-hidden border-b border-gray-100"
      >
        {/* Abstract glowing ambient blobs */}
        <div className="absolute top-1/4 -left-12 w-96 h-96 bg-brand-purple/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-12 w-[35rem] h-[35rem] bg-brand-coral/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* L: High-Converting Core Text Block */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-start">
              <div className="inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-semibold tracking-wide border border-brand-purple/10">
                <Sparkles size={14} className="text-brand-purple animate-pulse shrink-0" />
                <span>가르쳐 본 깊이와 실력으로 입증하는 프리미엄 1:1 매칭</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base font-extrabold text-brand-purple tracking-widest uppercase">
                  학부모님들이 먼저 찾아주시는 차분한 확신의 공부 파트너
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] xl:text-[54px] font-black text-gray-950 leading-[1.15] tracking-tight">
                  "선생님을 보는 눈은,
                  <span className="block text-brand-purple mt-1 sm:mt-2">
                    선생님이 가장 정확합니다."
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-600 font-sans leading-relaxed max-w-2xl font-medium">
                  단순 중개 사이트나 마케팅 광고 대행사가 아닙니다. 
                  고교 교육 현장에서 직접 가르쳐 온 매칭 상담 선생님이 1:1로 자녀의 학습 기질과 세부 학업 등급을 정밀 진단하여, 
                  끝까지 함께 달릴 최정예 전담 과외 선생님을 엄정하게 필터링하여 연결합니다.
                </p>
              </div>

              {/* Call to Actions & Highlight Badges */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <CTAButton
                  id="hero-massive-cta"
                  href="#consult"
                  className="px-8 py-5 !text-lg bg-brand-coral hover:bg-brand-coral-hover shadow-xl hover:shadow-brand-coral/20 hover:-translate-y-0.5 justify-center"
                >
                  {siteConfig.ctaLabel} (무료 상담 신청)
                </CTAButton>
                
                <div className="flex flex-col justify-center text-xs text-gray-500 font-medium pl-3 border-l-2 border-brand-purple py-1.5 space-y-1">
                  <div className="flex items-center gap-1.5 text-brand-purple font-bold">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>전화 한 통으로 즉시 완벽 배정</span>
                  </div>
                  <div>대면 매칭 테스트 및 학습 성향 리포트 무상 제공</div>
                </div>
              </div>

              {/* Real numbers grid */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100 max-w-lg">
                <div className="p-3 bg-white/70 backdrop-blur-xs rounded-2xl border border-gray-100 shadow-xs">
                  <span className="block text-xl sm:text-2xl font-extrabold text-brand-purple">100%</span>
                  <span className="block text-xxs sm:text-xs text-gray-500 font-bold mt-1">강사 이력 정밀 인증</span>
                </div>
                <div className="p-3 bg-white/70 backdrop-blur-xs rounded-2xl border border-gray-100 shadow-xs">
                  <span className="block text-xl sm:text-2xl font-extrabold text-brand-purple">97.8%</span>
                  <span className="block text-xxs sm:text-xs text-gray-500 font-bold mt-1">상담 완료 고객 만족</span>
                </div>
                <div className="p-3 bg-white/70 backdrop-blur-xs rounded-2xl border border-gray-100 shadow-xs">
                  <span className="block text-xl sm:text-2xl font-extrabold text-brand-purple">24시간</span>
                  <span className="block text-xxs sm:text-xs text-gray-500 font-bold mt-1">미스 매칭 보상 배정</span>
                </div>
              </div>
            </div>

            {/* R: High-impact full classroom teaching graphic based on Image 2 */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500 group">
                <img
                  src={heroImage}
                  alt="상담 선생님과 학생이 따뜻하고 집중된 교실 환경에서 책을 함께 보며 과외 학습 진로를 상의하고 매칭을 톺아보는 모습"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[4/3] lg:aspect-square xl:aspect-[5/4] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Visual rich gradient border overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg border border-gray-100/50">
                  <p className="text-xs sm:text-sm font-black text-gray-900 leading-snug">
                    "가르쳐 본 선생님만이 학생의 빈틈을 찾습니다."
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-semibold mt-1">
                    교실을 지키고 정성과 실력을 다했던 베테랑 선생님의 안목 그대로
                  </p>
                </div>
              </div>

              {/* Decorational elements */}
              <div className="absolute -bottom-4 -left-4 bg-brand-coral text-white p-3.5 rounded-2xl shadow-lg hidden sm:flex items-center gap-2">
                <GraduationCap size={20} />
                <span className="text-xs font-black">진짜 공부 멘토 매칭</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          [HERO 2] GIANT NEWSPAPER-STYLE CRISIS HERO (2028 수능 개편 실태 소식 & 이미지 1 완벽 실체화)
          ========================================== */}
      <section
        id="reform-section"
        className="scroll-mt-16 py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-100 border-b border-gray-200 relative overflow-hidden"
      >
        <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-brand-purple/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto z-10 relative">
          
          {/* Main Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-bold border border-orange-200">
              <AlertTriangle size={14} className="text-orange-600 animate-bounce" />
              <span>2028 대학입시제도 개편 실태 정밀 대비</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-gray-950 tracking-tight leading-tight">
              외우는 공부는 끝났다!<br className="sm:hidden" /> 수능 개편의 긴급 경고
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 font-sans leading-relaxed max-w-2xl mx-auto font-medium">
              신문 머리기사와 주요 보도들이 알리는 대격변의 기류 속에서, 
              우왕좌왕하지 않고 성과를 독점할 가장 완벽하고 지혜로운 로드맵 처방을 제안해 드립니다.
            </p>
          </div>

          {/* Huge Newspaper Replica Container (Recreating Image 1 with HTML/CSS precision) */}
          <div className="bg-[#f0ede6] hover:bg-[#eae6de] transition-colors duration-500 rounded-3xl p-6 sm:p-10 lg:p-14 border border-gray-300 shadow-2xl relative overflow-hidden font-sans">
            
            {/* Paper Accent Borders */}
            <div className="border-t-4 border-b-4 border-gray-950 py-3 mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-between text-gray-900 border-b border-gray-900/30 pb-2 gap-2 text-center sm:text-start">
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-gray-600">
                  SPECIAL 대합입시 개편안 보고서 No.2028
                </span>
                <span className="font-serif font-black text-xl italic tracking-tighter text-brand-purple">
                  gwawoe-matching.news
                </span>
                <span className="font-sans font-semibold text-xs tracking-wider text-gray-500">
                  공식 입시 팩트체크 리포트
                </span>
              </div>
              
              {/* Massive Main Headline mimicking the image style absolutely */}
              <h3 className="text-3xl sm:text-[44px] md:text-[52px] lg:text-[62px] font-sans font-black text-gray-950 tracking-tighter text-center pt-5 pb-3 uppercase leading-none select-none">
                2028 대학입시제도 개편
              </h3>
            </div>

            {/* Simulated Newspaper Article & Photo layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Side: Editorial News Text & Floating Interactive Highlighter Badges */}
              <div className="lg:col-span-12 relative">
                
                {/* Background blurred actual paper text pattern */}
                <div className="opacity-15 font-serif text-sm sm:text-base text-gray-950 leading-relaxed text-justify space-y-4 font-normal tracking-tight select-none pointer-events-none pb-4 border-b border-gray-900/10 mb-8 sm:mb-12">
                  <p>
                    2028 학년도 대입 개편안의 구체적인 윤곽이 조금씩 드러나고 있다. 학교 생활기록부를 중심으로 한 한 대입전형 자료에 다양한 성적, 통계 정보를 추가하기로 했다. 이외 서울대는 최근 대입정책연구팀에서 2028 입학전형 자료안 관련 심포지엄 연구 결과를 공유했으며, 수능은 선택과목이 완전히 사라지고 수험생 모두 동일한 과목의 수능 모형 시험을 치르게 된다. 그 중 과학탐구와 사회탐구 선택이 사라지고 통합사회와 통합과학 두 과목을 기본으로 하여 융합 탐구 지식 수준을 요구한다. 지식 암기의 단순한 형태를 극복하고 깊이 있는 성과 변별력을 유지하는 것이 과제이다.
                  </p>
                </div>

                {/* Floating annotation badges - MATCHING IMAGE 1 PRECISELY */}
                <div className="space-y-4 sm:space-y-6 relative max-w-5xl mx-auto">
                  <p className="text-gray-900 font-extrabold text-sm sm:text-base border-l-4 border-brand-purple pl-3 mb-6">
                    🚨 꼭 확인해야 할 이미지 1 핵심 파급 분석 지점 (클릭하여 직접 가르쳐 온 선생님들의 연계 대비 필승 전략 다운로드)
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {siteConfig.examReformFacts.map((fact) => {
                      const isSelected = selectedFactId === fact.id;
                      return (
                        <div
                          key={fact.id}
                          onClick={() => setSelectedFactId(fact.id)}
                          className={`cursor-pointer group flex flex-col justify-between p-5 rounded-2xl border transition-all duration-300 transform ${
                            isSelected
                              ? "bg-white border-brand-purple shadow-xl -translate-y-1 scale-[1.01]"
                              : "bg-[#f5f2eb] hover:bg-white border-gray-300 hover:border-gray-400 hover:-translate-y-0.5"
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-brand-purple text-white px-2 py-0.5 rounded-md">
                                {fact.badge}
                              </span>
                              <div className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-brand-coral animate-ping" : "bg-gray-300"}`} />
                            </div>
                            
                            {/* Mimicking the high-contrast highlighting style in Image 1 */}
                            <h4 className="text-base sm:text-lg font-black text-gray-950 font-sans tracking-tight leading-snug">
                              {fact.headline}..{" "}
                              <span className="bg-yellow-200/90 text-gray-900 px-1 inline-block font-black border-b border-gray-900/10">
                                {fact.highlight}
                              </span>
                            </h4>
                            
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                              {fact.description}
                            </p>
                          </div>

                          <div className="pt-4 mt-4 border-t border-gray-900/10 flex items-center justify-between">
                            <span className="text-xxs sm:text-xs text-brand-purple font-extrabold">
                              매칭 선생님 솔루션 뺘대 확인
                            </span>
                            <ChevronRight size={14} className="text-brand-purple group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>
            </div>

            {/* Interactive analysis detail display matching selected node */}
            <div className="mt-10 sm:mt-12 bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-300 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-100 gap-4">
                <div className="space-y-1 text-start">
                  <span className="text-xs font-bold text-brand-purple bg-brand-purple-light px-2.5 py-1 rounded-full uppercase">
                    실시간 체크 중: {activeFact.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-gray-950 mt-1">
                    {activeFact.headline}
                  </h4>
                </div>
                <div className="self-start md:self-auto text-xs sm:text-sm font-black text-brand-coral bg-brand-coral/5 px-3 py-1.5 border border-brand-coral/10 rounded-lg">
                  {activeFact.highlight}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2 text-start bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                  <h5 className="flex items-center gap-1.5 text-xs font-black text-amber-700 tracking-wider uppercase">
                    <AlertTriangle size={14} className="text-amber-600" />
                    <span>개편이 가져오는 위기감의 핵심</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-700 tracking-normal leading-relaxed font-sans font-medium">
                    {activeFact.meaning}
                  </p>
                </div>

                <div className="space-y-2 text-start bg-brand-purple-light/50 p-4 rounded-xl border border-brand-purple/10">
                  <h5 className="flex items-center gap-1.5 text-xs font-black text-brand-purple tracking-wider uppercase">
                    <Compass size={14} className="text-brand-purple" />
                    <span>가르쳐 본 매칭 선생님의 전문 해법</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-800 tracking-normal leading-relaxed font-sans font-bold">
                    {activeFact.solution}
                  </p>
                </div>
              </div>

              {/* Action trigger for recruitment */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 font-bold tracking-tight text-center sm:text-start">
                  ※ 대입개편 대비 1:1 맞춤 진단을 해오던 상담 교사 선생님과 지금 상담을 연계하세요.
                </span>
                
                <CTAButton
                  id="fact-details-conversion-cta"
                  href="#consult"
                  className="px-6 py-2.5 !text-sm sm:!text-base font-black bg-brand-coral hover:bg-brand-coral-hover text-white rounded-full shadow-md whitespace-nowrap self-stretch sm:self-auto"
                >
                  과외 대비 상담 받기
                </CTAButton>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CURRICULUM PLACEHOLDER SECTION */}
      <section
        id="curriculum"
        className="scroll-mt-16 min-h-[40vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-white border-b border-gray-100"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple-light flex items-center justify-center text-brand-purple mx-auto border border-brand-purple/10 shadow-sm">
            <BookOpen size={22} />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              학년별·과목별 맞춤 커리큘럼
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-sans">
              초·중·고 학년별 성취 등급과 교과 특징에 맞춘 상위권 전문 강사 라인업과 
              내신/수능 융합 대비용 교재 선정 정보가 구축되어 있습니다.
            </p>
          </div>
          <div className="pt-4">
            <div className="inline-block px-5 py-3 border border-brand-purple/20 bg-brand-purple-light/40 text-xs sm:text-sm text-brand-purple font-semibold rounded-2xl max-w-lg">
              📚 학년별 특별 집중 대입 프로그램, 학습 레벨 진단 상세 프로세스는 다음 작업 단계에서 구현됩니다.
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROOF PLACEHOLDER SECTION */}
      <section
        id="proof"
        className="scroll-mt-16 min-h-[40vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-slate-50 border-b border-gray-100"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-purple mx-auto shadow-md border border-slate-100">
            <Quote size={20} className="text-brand-purple" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              상담 성공 후기 & 리얼 성장스토리
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-sans font-medium">
              실제로 매칭 상담 선생님과 1:1 맞춤 진단을 경험한 후 
              극적인 성적 역전과 올바른 자기주도습관을 완성한 놀라운 사례들을 모았습니다.
            </p>
          </div>
          <div className="pt-4">
            <div className="inline-block px-5 py-3 border border-gray-200 bg-white text-xs sm:text-sm text-gray-500 font-semibold rounded-2xl max-w-lg shadow-sm">
              💬 실제 수업 진행생들의 등급 극복 수표 지형 및 상세 인터뷰 목록은 다음 대화에서 연동됩니다.
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION PLACEHOLDER SECTION (폼 구축 전 앵커 대상 보장) */}
      <section
        id="consult"
        className="scroll-mt-16 min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-24 bg-white"
      >
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center text-brand-coral mx-auto border border-brand-coral/20">
            <Mail size={24} className="text-brand-coral" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-950 tracking-tight">
              무료 상담 신청 접수처
            </h2>

            <p className="text-base text-gray-600 leading-relaxed font-sans max-w-md mx-auto">
              상담과 매칭은 100% 무료로 진행됩니다.
              인근 지역, 학생의 학년 및 취약 과목, 그리고 학부모님의 진솔한 고민을 남기는 신청서 양식이 다음 단계에서 완성됩니다.
            </p>
          </div>

          <div className="inline-block p-6 rounded-2xl border-2 border-dashed border-brand-coral/30 bg-brand-coral/5 max-w-md text-start space-y-3 shadow-xs">
            <p className="text-sm font-black text-gray-900 flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-brand-coral shrink-0" />
              <span>📋 무료 상담 신청 폼 영역 준비 중</span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
              학생의 기본 정보(학년, 과목군) 및 요구 성향을 전달하기 위한 신청 UI와 안전한 개인정보 처리 위수탁 동의는 다음 단계에서 즉시 연동됩니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
