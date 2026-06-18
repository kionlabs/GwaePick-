/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ExamReformFact {
  id: string;
  badge: string;
  headline: string;
  highlight: string;
  description: string;
  meaning: string;
  solution: string;
}

export const siteConfig = {
  name: "맞춤과외상담",
  slogan: "선생님을 보는 눈은, 선생님이 가장 정확합니다.",
  ctaLabel: "무료 상담 신청",
  contact: {
    phone: "010-XXXX-XXXX",
    email: "support@gwawoe-matching.example.com",
    address: "서울특별시 마포구 백범로 31길 21",
    businessNumber: "123-45-67890",
  },
  navigation: [
    { label: "홈", href: "#hero" },
    { label: "입시 개편 팩트체크", href: "#reform-section" },
    { label: "교재·커리큘럼", href: "#curriculum" },
    { label: "성장 스토리", href: "#proof" },
    { label: "무료 상담", href: "#consult" },
  ] as NavItem[],
  copyright: "© 2026 맞춤과외상담. All rights reserved.",
  
  // 2028 College Admission Reform Details matched with our tutor guidance
  examReformFacts: [
    {
      id: "fact1",
      badge: "내신 제도 개편",
      headline: "내신 5등급제 전환",
      highlight: "1등급 학생 8배 증가",
      description: "기존 9등급 상태에서 상위 4%만 받던 1등급이 고교 전과목 5등급제 적용으로 10%까지(약 8배) 대폭 증가합니다.",
      meaning: "이전에 비해 상위권 내신의 변별력이 크게 하락하므로, 단순 내신 지표 외에 학교 생활기록부의 교과세특(세부능력 및 특기사항) 및 심층 서술형 평가가 대학 합격을 가르는 핵심이 됩니다.",
      solution: "가르쳐 본 선생님의 혜안: 내신 숫자만 메꾸는 주입식 과외는 실패합니다. 아이의 사소한 탐구 습관까지 세밀하게 기록할 수 있도록 교과 세특과 유기적으로 결합된 탐구형 학습 가이드가 필요합니다."
    },
    {
      id: "fact2",
      badge: "수능 체제 변화",
      headline: "국어·수학 선택과목 폐지",
      highlight: "통합형 수능 전면 도입",
      description: "모든 수험생이 선택 과목 구분 없이 국어, 수학, 사회·과학 탐구 영역에서 도 동일한 시험을 치르게 됩니다.",
      meaning: "어떤 과목을 선택하느냐에 따른 유리함과 불리함이 완전히 사라지고, 공통 수학 및 기초 독해력의 절대적 수준이 수능 성적을 백퍼센트 좌우하게 됩니다.",
      solution: "가르쳐 본 선생님의 혜안: 편법이나 요행을 바라는 스킬식 공부보다 개념의 밑바닥부터 톺아보는 정석 독해와 정공법 수학 훈련이 가장 핵심적인 승부처가 될 것입니다."
    },
    {
      id: "fact3",
      badge: "변별력 핵심",
      headline: "사회·과학 통합탐구 수능",
      highlight: "융합 탐구력이 대입 성패 결정",
      description: "사회와 과학의 경계가 무너지고 고1 단계의 공통 사회, 공통 과학 교과가 결합된 통합 탐구 영역이 수능으로 출제됩니다.",
      meaning: "지식의 단순 암기는 무의미합니다. 하나의 현상을 문과적, 이과직 관점에서 함께 조망하고 분석하는 '융합형 논리 탐구 능력'이 변별력을 주는 핵심 요소가 될 것입니다.",
      solution: "가르쳐 본 선생님의 혜안: 인문사회 고전 독서 활동과 기초 에세이 작성을 매 수업에 연계하여, 단 시간 안에 지식을 체화하고 서술할 수 있는 생각의 깊이를 기르는 것이 필수입니다."
    },
    {
      id: "fact4",
      badge: "교육·평가 패러다임",
      headline: "외우는 주입식 공부의 종말",
      highlight: "생각하는 국어·논술형 중심 평가",
      description: "학교 시험과 서술형 지필고사에서 논술형 문항의 비중이 비약적으로 증가하며 결과 이외에 풀이 과정 전체가 평가됩니다.",
      meaning: "객관식 찍기 학습에 절여진 학생들은 등급 유지 자체가 불가합니다. 스스로 반론을 제기하고 정교한 논리로 주장을 설득하는 훈련이 교육 매개 전반에서 평가됩니다.",
      solution: "가르쳐 본 선생님의 혜안: 1:1 과외 시간 내내 학생이 직접 말로 입증하고 오답을 논리적으로 반박하는 '역질문 하브루타식 수업'만이 생각하는 힘을 회복하는 유일한 열쇠입니다."
    },
    {
      id: "fact5",
      badge: "고교학점제 상륙",
      headline: "고교학점제 전면 실시",
      highlight: "나만의 전략적 진로 로드맵 필수",
      description: "대학처럼 학생 스스로 원하는 과목을 골라 들으며 각자의 성장을 기록해 나가는 고교학점제가 완전 정착됩니다.",
      meaning: "어떤 과목들을 수강했는지 자체가 대학 입학사정관에게 강력한 자기소개의 뼈대가 됩니다. 목표 전공과 무관한 마구잡이식 과목 수강은 대입에서 큰 마이너스가 됩니다.",
      solution: "가르쳐 본 선생님의 혜안: 첫 시작 단계부터 전공 계열에 연계된 맞춤식 고교 이수 연계 로드맵을 사전에 다듬고 행동에 옮겨야 입학 경쟁에서 주도권을 잡습니다."
    }
  ] as ExamReformFact[]
};
