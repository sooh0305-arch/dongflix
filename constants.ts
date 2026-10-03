
import { Content } from './types';

// GitHub에 저장한 웹용 포트폴리오 자료. AI Studio에서도 같은 URL로 표시합니다.
const MEDIA_BASE = 'https://raw.githubusercontent.com/sooh0305-arch/dongflix/285c47b4e31e1e7d66b1791627803268430da8a0/public/portfolio/';
const media = (filename: string) => `${MEDIA_BASE}${filename}`;



export const HERO_CONTENT: Content = {
  id: 'hero-main',
  title: "The Hybrid HRD Specialist",
  subtitle: "기획, 연출, 그리고 AI. 교육의 판을 바꾸는 올라운더가 온다.",
  description: "전통적인 HRD의 경계를 넘어 데이터 기반의 성과 관리와 크리에이티브한 콘텐츠 제작 역량을 겸비했습니다. 지루한 교육은 이제 그만, DONG-FLIX에서 새로운 학습 경험을 확인하세요.",
  tags: ['HRD', 'Creative', 'AI Specialist', 'Director'],
  imageUrl: "https://images.unsplash.com/photo-1492619334760-22402c01594e?q=80&w=2000&auto=format&fit=crop",
  category: 'hero',
  matchScore: 99,
  year: '2026',
  duration: 'Season 1',
  careerHistory: [
    {
      period: "2021.08 ~ 현재",
      company: "세라젬 (세라제머육성팀)",
      role: "교육콘텐츠 제작, 교육운영, 사업주훈련/사외교육 담당"
    },
    {
      period: "2020.04 ~ 2021.08",
      company: "광진구청 (홍보담당관)",
      role: "구청 주요 사업 홍보물 기획 및 제작"
    }
  ],
  education: [
    "2026년 한성대학교 ICT융합디자인 재학중",
    "2019년 청강문화산업대학교 만화창작과 졸업"
  ],
  certifications: [
    "포토샵 GTQ 1급 보유"
  ]
};

export const TRENDING_DATA: Content[] = [
  {
    id: 't-1',
    title: "정부지원훈련 운영 및 교육비 관리",
    subtitle: "누적 지원금 약 1억 8,680만 원 확보",
    amount: "1억 8,680만원",
    description: "교육 기획 단계부터 지원 가능 여부를 사전 검토하고, 요건이 각기 다른 4개 지원제도(산업·일자리전환, 인재키움, 사업주훈련 등)를 병행 운영하여 교육예산 투입을 최소화하고 높은 교육 성과를 창출했습니다.",
    tags: ['#정부지원금', '#교육비절감', '#훈련행정', '#사업주훈련'],
    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 1,
    matchScore: 99,
    year: '2023.04 ~ 현재',
    subItems: [
      {
        id: 't-sub-gov-1',
        title: '산업·일자리전환 지원사업 (9,560만 원 확보)',
        description: '산업전환 공동훈련센터 연계를 통해 연간 9,560만 원의 지원금을 확보하고 AI 리터러시, DT Change Agent 등 전사 첨단 기술 과정을 운영했습니다.'
      },
      {
        id: 't-sub-gov-2',
        title: '인재키움 프리미엄 훈련 (6,000만 원 확보)',
        description: '핵심 직무 능력 향상을 위한 고급 훈련 과정을 연계하여 사내 인재들의 전문 역량을 끌어올렸습니다.'
      },
      {
        id: 't-sub-gov-3',
        title: '사업주훈련 환급 관리 (3,120만 원 확보)',
        description: '훈련과정 신고, 출결·수료 관리, 결과 보고 및 정산 서류 관리를 절차화하여 연평균 환급금을 안전하게 수령했습니다.'
      }
    ]
  },
  {
    id: 't-3',
    title: "전사 공통직무 교육 '오픈클래스'",
    subtitle: "매월 정례 상시 학습 채널 기획·운영",
    description: "부서·직급과 무관하게 실무에 필요한 핵심 공통 역량을 매월 채우는 오픈형 정례 학습 시스템입니다. 매월 1회, 회차당 3시간 규모로 정례 운영하며 수요조사를 통해 주제와 강사를 차별화하여 배치합니다.",
    tags: ['#오픈클래스', '#공통직무', '#상시학습', '#스피치_AI_엑셀'],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 2,
    matchScore: 97,
    year: '2025 ~ 현재',
    subItems: [
      {
        id: 't-sub-open-1',
        title: '상시 학습 채널 정착 및 주제 편성',
        description: '스피치, AI 활용, PPT, 엑셀, 태블로 등 직무 공통 역량 중심 주제 편성으로 연 단위 대형 과정 중심에서 매월 열리는 개방형 학습 채널로 전환했습니다.'
      },
      {
        id: 't-sub-open-2',
        title: '교육 참여 범위 확대 및 기획 표준화',
        description: '부서/직급 제한 없는 자유로운 신청 구조로 교육 소외 직군까지 참여 범위를 확대하고 운영 절차를 표준화하여 상시 운영 효율을 극대화했습니다.'
      }
    ]
  },
  {
    id: 't-4',
    title: "기타 교육 운영 지원 및 온보딩",
    subtitle: "체계적인 교육 프로그램 기획 및 연수 운영",
    description: "신규 입사자 온보딩 프로그램 기획을 포함하여 사내 다양한 직무 연수 및 특화 프로그램을 세심하게 기획·운영 지원하고 있습니다.",
    tags: ['#Onboarding', '#Operations', '#EducationSupport'],
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 3,
    matchScore: 94,
    year: '2023 ~ 현재',
    subItems: [
      {
        id: 't-sub-onboarding',
        title: '신규 입사자 온보딩 프로그램',
        description: '게이미피케이션 요소를 도입한 온보딩 과정을 설계하여 수습 기간 내 조기 퇴사율을 전년 대비 20% 감소시키는 성과를 도출했습니다.'
      }
    ]
  }
];

export const ORIGINALS_DATA: Content[] = [
  {
    id: 'o-1',
    title: "영상 콘텐츠",
    subtitle: "Motion, Variety, Product Video & LMS Content",
    description: "사내 LMS '세라원아카데미' 운영 및 AI 제작 공정 도입을 통해 외주 구매 없이 모션그래픽, 예능형 사내 콘텐츠, 시네마틱 제품 영상 등 총 103편의 교육·홍보 영상을 기획·촬영·편집했습니다.",
    tags: ['#Video', '#Production', '#Editing', '#MotionGraphics', '#LMS', '#AI_공정'],
    imageUrl: media('video-thumbnail.png'),
    category: 'originals',
    matchScore: 99,
    contentType: 'video',
    subItems: [
      { id: "v-cera-lab-ep02", title: "세라랩 EP.02", description: "사내 예능형 교육 콘텐츠 세라랩 영상입니다.", duration: "4:08", assetUrl: media('cera-lab-ep02.mp4'), posterUrl: media('cera-lab-ep02-poster.webp') },
      { id: "v-company-introduction", title: "회사소개영상", description: "회사 소개를 위한 홍보 영상입니다.", duration: "4:17", assetUrl: media('company-introduction.mp4'), posterUrl: media('company-introduction-poster.webp') },
      { id: "v-celltron", title: "셀트론 제품영상", description: "셀트론 제품 소개 영상입니다.", duration: "1:46", assetUrl: media('celltron.mp4'), posterUrl: media('celltron-poster.webp') },
      { id: "v-celltron-chair-bluetooth", title: "셀트론체어 블루투스 안내", description: "셀트론체어 블루투스 연결 및 사용 안내 영상입니다.", duration: "1:49", assetUrl: media('celltron-chair-bluetooth.mp4'), posterUrl: media('celltron-chair-bluetooth-poster.webp') },
      { id: "v-celltron-e2-guide", title: "셀트론 E2 사용법", description: "셀트론 E2 제품 사용법 안내 영상입니다.", duration: "1:25", assetUrl: media('celltron-e2-guide.mp4'), posterUrl: media('celltron-e2-guide-poster.webp') },
      { id: "v-pause-m4", title: "파우제 M4 특장점", description: "파우제 M4의 제품 특장점을 소개하는 영상입니다.", duration: "1:54", assetUrl: media('pause-m4.mp4'), posterUrl: media('pause-m4-poster.webp') },
      { id: "v-hair-miracle", title: "헤어미라클 제품영상", description: "헤어미라클 제품 소개 영상입니다.", duration: "1:34", assetUrl: media('hair-miracle.mp4'), posterUrl: media('hair-miracle-poster.webp') },
      { id: "v-hair-miracle-ad", title: "헤어미라클 광고소재", description: "헤어미라클 광고용 영상 소재입니다.", duration: "0:35", assetUrl: media('hair-miracle-ad.mp4'), posterUrl: media('hair-miracle-ad-poster.webp') },
      { id: "v-subscription-service", title: "구독서비스의 중요성", description: "구독서비스의 중요성을 전달하는 교육 영상입니다.", duration: "6:44", assetUrl: media('subscription-service.mp4'), posterUrl: media('subscription-service-poster.webp') },
      { id: "v-thanks-ceragem-interview", title: "1분기 땡스세라제머 인터뷰", description: "땡스세라제머 인터뷰 영상입니다.", duration: "10:41", assetUrl: media('thanks-ceragem-interview.mp4'), posterUrl: media('thanks-ceragem-interview-poster.webp') },
      { id: "v-leader-workshop-interview", title: "리더워크샵 팀원 인터뷰", description: "리더워크샵을 위한 팀원 인터뷰 영상입니다.", duration: "7:53", assetUrl: media('leader-workshop-interview.mp4'), posterUrl: media('leader-workshop-interview-poster.webp') },
      { id: "v-screensaver", title: "화면보호기 영상", description: "사내 화면보호기용으로 제작한 영상입니다.", duration: "0:58", assetUrl: media('screensaver.mp4'), posterUrl: media('screensaver-poster.webp') }
    ]
  },
  {
    id: 'o-2',
    title: "카드뉴스",
    subtitle: "Micro Learning & Branding",
    description: "핵심 직무 정보 및 건강 팁을 모바일 친화적으로 전달하는 카드뉴스 82편을 직접 디자인·제작했습니다.",
    tags: ['#CardNews', '#Design', '#MicroLearning'],
    imageUrl: media('cardnews-thumbnail.png'),
    category: 'originals',
    matchScore: 96,
    contentType: 'card',
    subItems: [
      { id: "c-1", title: "통증과 몸의 신호", description: "척추와 통증에 관한 건강정보 카드뉴스입니다.", images: [media('card-news-1.webp')] },
      { id: "c-2", title: "척추 피로 관리", description: "디지털 기기 사용과 척추 피로를 다룬 카드뉴스입니다.", images: [media('card-news-2.webp')] },
      { id: "c-3", title: "건강정보: 두통", description: "두통의 원인과 정보를 시각화한 카드뉴스입니다.", images: [media('card-news-3.webp')] },
      { id: "c-4", title: "건강정보: 피부", description: "피부 구조를 설명하는 건강정보 카드뉴스입니다.", images: [media('card-news-4.webp')] }
    ]
  },
  {
    id: 'o-3',
    title: "웹툰",
    subtitle: "Story-telling Education",
    description: "친근한 만화 기법을 적용해 몰입도를 증대시킨 에듀테인먼트 사내 웹툰 56편을 연재·제작했습니다.",
    tags: ['#Webtoon', '#Illustration', '#Edutainment'],
    imageUrl: media('webtoon-thumbnail.png'),
    category: 'originals',
    matchScore: 97,
    contentType: 'webtoon',
    subItems: [
      { id: "w-1", title: "전지적 척추시점 — 표지", description: "전지적 척추시점 시리즈의 표지 디자인입니다.", images: [media('spine-cover.webp')] },
      { id: "w-2", title: "전지적 척추시점 — 썸네일", description: "시리즈 홍보용 썸네일 디자인입니다.", images: [media('spine-thumbnail.webp')] },
      { id: "w-3", title: "전지적 척추시점 — 행사 현수막", description: "행사 공간에 활용한 현수막 디자인입니다.", images: [media('spine-event-banner.webp')] }
    ]
  }
];

export const TECH_DATA: Content[] = [
  {
    id: 'tech-3',
    title: "바이브 코딩 (Vibe Coding)",
    subtitle: "Google AI Studio, Claude, GPT 활용 사내 웹 서비스 직접 개발",
    description: "Google AI Studio, Claude, ChatGPT 등 생성형 AI 모델과 웹 기술을 활용하여, 외주 용역 없이 제도를 기획한 작성자가 직접 사내 웹 플랫폼을 구축하고 배포·운영합니다.",
    tags: ['#바이브코딩', '#ThankYou_CERAGEM', '#AI_Studio', '#Claude', '#GPT', '#React', '#Firebase'],
    imageUrl: "/vibe_coding.svg",
    category: 'tech',
    matchScore: 100,
    year: '2026.05 ~ 현재',
    subItems: [
      {
        id: 'tech-vibe-ceragem',
        title: "사내 칭찬문화 플랫폼 'Thank you CERAGEM' 기획·개발·운영 (2026.05 ~ 현재)",
        description: "• [제도 기획 & 바이브코딩 개발]: 외부 개발 용역 없이, 제도를 기획한 담당자가 바이브코딩(AI 활용 개발)으로 React·TypeScript / Firebase·Cloud Run 기반 사내 웹 플랫폼 단독 구축.\n• [SAML SSO 및 인증 연동]: 네이버웍스 SAML SSO 연동 구현. Firebase 기본 SAML의 한계를 극복하기 위해 Node.js 기반 커스텀 인증 서버를 별도 구축해 사내 계정 연동 완료.\n• [시스템 통합 & 보안]: 칭찬 메시지 작성 → 포인트 지급 → 기프티콘 교환 → 분기별 시상으로 연결되는 개별 운영 프로세스를 단일 시스템으로 통합. 포인트 로직 서버사이드 이관 및 보안 규칙 적용 완료."
      }
    ]
  },
  {
    id: 'tech-1',
    title: "AI 교육 기획 및 운영",
    subtitle: "전사 AI 리터러시 및 사내 AI 에이전트 활용 과정 기획·운영",
    description: "직급별·직군별로 요구되는 AI 활용 레벨을 다각도로 분석하여, 리더/매니저 대상 맞춤형 AI 리터러시 교육과 사내 AI 에이전트 'CERA Agent'의 현장 적용 교육을 기획 및 총괄 운영했습니다.",
    tags: ['#AI교육', '#AI리터러시', '#CERA_Agent', '#생성형AI', '#업무자동화', '#정부지원금4800만'],
    imageUrl: "/ai_education.svg",
    category: 'tech',
    matchScore: 99,
    year: '2025.09 ~ 2026.07',
    subItems: [
      {
        id: 'tech-sub-literacy',
        title: '전사 AI 리터러시 교육 기획·운영 (2025.09 ~ 2025.12)',
        description: '• [과정 설계 & 예산 절감]: 팀장/매니저급 20시간 과정(38명 2개반) 설계. 산업·일자리전환 지원사업 연계로 정부지원금 4,800만 원 확보하여 예산 투입 최소화.\n• [성과]: 20시간 장기 과정임에도 만족도 4.7/5.0 달성. 단순 툴 학습을 넘어 실제 업무 결과물을 도출하는 커리큘럼 정착.'
      },
      {
        id: 'tech-sub-agent',
        title: "사내 AI 에이전트 'CERA Agent' 활용 교육 (2026.06 ~ 2026.07)",
        description: '• [권역별·직군별 설계]: 서울·과천·천안 3개 권역별 총 4회 운영. 연구소, 디자인, 구매, 물류 등 직군별 특성 반영 사전 수요조사 실시.\n• [성과]: 팀별 최소 1명 이상 참여 구조로 전사 확산 유도. 범용 사례가 아닌 자사 실제 업무 사례를 직접 활용한 실습 과정 구축.'
      }
    ]
  }
];

export const CULTURE_DATA: Content[] = [
  {
    id: 'cul-1',
    title: "사내라이브방송 운영",
    subtitle: "소통플러스 — 사내 라이브 방송 & 실시간 커뮤니케이션",
    description: "일방향 공지 형태에서 벗어나 경영진과 구성원이 직접 대화하고 소통하는 사내 라이브 방송 '소통플러스'를 기획·운영했습니다. 주제 선정, 큐시트·대본 작성, 출연자 섭외, 송출, 실시간 Q&A까지 전 과정을 내부에서 직접 전담하여 사내 소통과 유대감을 강화했습니다.",
    tags: ['#사내라이브방송', '#소통플러스', '#실시간소통', '#사내커뮤니케이션', '#내재화'],
    imageUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop",
    category: 'culture',
    matchScore: 99,
    year: '2025.04 ~ 현재',
    subItems: [
      {
        id: 'cul-live-1',
        title: '사내 소통 라이브 채널 "소통플러스" 신설 및 정례화',
        description: '게시판 공지 일변도였던 사내 소통에 경영진과 구성원이 실시간으로 소통하는 양방향 라이브 채널 신설.'
      },
      {
        id: 'cul-live-2',
        title: '기획·대본·촬영·송출 전 과정 내재화',
        description: '주제 선정, 큐시트 작성, 출연자 섭외, 기술 송출 및 실시간 질의응답을 외주 없이 전담 수행하여 사안 발생 시 즉각 대응.'
      }
    ]
  },
  {
    id: 'cul-2',
    title: "조직문화포스터 제작",
    subtitle: "기업 핵심 가치 및 조직문화 캠페인 비주얼 브랜딩",
    description: "기업의 핵심 가치와 일하는 방식을 시각적으로 형상화하여 사무 공간 및 사내 채널에 배포하는 조직문화 캠페인 포스터, 배너, 카드뉴스를 직접 기획하고 디자인하여 임직원들이 기업 문화를 자연스럽게 내재화하도록 지원했습니다.",
    tags: ['#조직문화포스터', '#비주얼브랜딩', '#캠페인디자인', '#핵심가치내재화'],
    imageUrl: media('culture-poster-1.webp'),
    contentType: 'card',
    category: 'culture',
    matchScore: 97,
    year: '2025 ~ 현재',
    subItems: [
      { id: "cul-poster-1", title: "조직문화 포스터 1", description: "고객 관점에서 생각하는 일하는 방식을 담은 포스터입니다.", images: [media('culture-poster-1.webp')] },
      { id: "cul-poster-2", title: "조직문화 포스터 2", description: "조직 내 존중과 소통을 담은 포스터입니다.", images: [media('culture-poster-2.webp')] },
      { id: "cul-poster-3", title: "조직문화 포스터 3", description: "일하는 태도와 행동 원칙을 전달하는 포스터입니다.", images: [media('culture-poster-3.webp')] }
    ]
  },
  {
    id: 'cul-3',
    title: "사내 웹드라마 제작",
    subtitle: "임직원 직접 참여형 공감 웹드라마 프로젝트",
    description: "직원들이 직접 기획, 연출, 배우로 참여한 사내 웹드라마 프로젝트입니다. 조직 내 소통 부재와 세대 갈등, 업무 현장의 생생한 에피소드를 유쾌하고 진솔하게 풀어내어 전사적 공감대와 유대감을 이끌어냈습니다.",
    tags: ['#사내웹드라마', '#임직원참여', '#조직문화활성화', '#공감스토리'],
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    category: 'culture',
    matchScore: 98,
    year: '2024',
    subItems: [
      {
        id: 'cul-drama-1',
        title: '임직원 참여형 시나리오 & 연출',
        description: '사내 실제 에피소드를 바탕으로 공감형 스토리를 구성하고 직원들이 배우로 참여해 높은 몰입과 화제성 형성.'
      },
      {
        id: 'cul-drama-2',
        title: '세대 간 소통 및 문화 활성화 기여',
        description: '일방적 교육 대신 드라마라는 친근한 미디어를 통해 세대 간 공감대를 형성하고 유쾌한 기업 문화 조성.'
      }
    ]
  },
  {
    id: 'cul-4',
    title: "기타 조직문화 활동",
    subtitle: "참여형 퀴즈 이벤트, 타운홀 미팅 & 팀 빌딩",
    description: "정보보안·건강 등 필수 전달사항을 퀴즈 이벤트로 재구성하여 자발적 열람을 유도하고, 타운홀 미팅 및 팀 빌딩 이벤트를 기획·운영하여 구성원 간의 친목 도모와 건강한 소통 문화를 정착시켰습니다.",
    tags: ['#기타조직문화', '#참여형이벤트', '#퀴즈이벤트', '#타운홀미팅', '#팀빌딩'],
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    category: 'culture',
    matchScore: 96,
    year: '2023 ~ 현재',
    subItems: [
      {
        id: 'cul-etc-1',
        title: '참여형 퀴즈 이벤트 기획·운영',
        description: '읽히지 않던 필수 정보(보안, 건강 등)를 재미있는 퀴즈로 재구성하고 경품 지급 프로세스를 운영해 임직원의 자발적 참여 유도.'
      },
      {
        id: 'cul-etc-2',
        title: '타운홀 미팅 & 팀 빌딩 프로그램',
        description: '경영진과 임직원 간 자유로운 소통의 장을 마련하고 부서 간 교류와 결속력을 강화하는 다채로운 조직 활성화 행사 운영.'
      }
    ]
  }
];


// Creative categories: video, card news, webtoon. Thumbnails supplied by owner.
