
import { Content } from './types';

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
    "2019년 청강문화산업대학교 만화창작과 졸업"
  ],
  certifications: [
    "포토샵 GTQ 1급 보유"
  ]
};

export const TRENDING_DATA: Content[] = [
  {
    id: 't-1',
    title: "산업/일자리 전환 지원금 확보",
    subtitle: "2025 산업전환 지원사업 선정 (연간 9,560만원)",
    description: "고용노동부 주관 산업전환 공동훈련센터 사업 선정으로 연간 9,560만원의 정부 지원금을 확보했습니다. 이와 연계하여 전사 AI 리터러시 교육 운영 및 진행을 총괄하며 디지털 전환의 토대를 마련했습니다.",
    tags: ['#성과', '#Funding', '#AI_Literacy'],
    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 1,
    matchScore: 98,
    year: '2025'
  },
  {
    id: 't-2',
    title: "사업주 훈련비 관리",
    subtitle: "연 1,500만원 국비 지원 운영",
    description: "복잡한 행정 절차를 시스템화하여 연간 1,500만원 규모의 사업주 훈련비 환급 과정을 100% 달성하고 누락 없는 비용 관리를 실현했습니다.",
    tags: ['#운영', '#CostSaving', '#Admin'],
    imageUrl: "https://images.unsplash.com/photo-1454165833767-151671e55831?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 2,
    matchScore: 97,
    year: '2024'
  },
  {
    id: 't-3',
    title: "공통 직무 교육 오픈클래스 운영",
    subtitle: "ISO/GMP 심사 대응 준비 및 직무 역량 강화",
    description: "품질 경영을 위한 ISO 및 GMP 심사 대응 체계를 구축하고, 이를 기반으로 사내 공통 직무 교육인 '오픈클래스'를 기획·운영하여 조직 전체의 전문성을 상향 평준화했습니다.",
    tags: ['#Audit_Ready', '#OpenClass', '#JobSkill'],
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 3,
    matchScore: 95,
    year: '2024'
  },
  {
    id: 't-4',
    title: "신규 입사자 온보딩",
    subtitle: "정착률 20% 상승 견인",
    description: "게이미피케이션 요소를 도입한 신규 입사자 온보딩 프로그램을 기획하여, 수습 기간 내 조기 퇴사율을 전년 대비 20% 감소시켰습니다.",
    tags: ['#Onboarding', '#Retention'],
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    category: 'trending',
    rank: 4,
    matchScore: 92,
    year: '2023'
  }
];

export const ORIGINALS_DATA: Content[] = [
  {
    id: 'o-1',
    title: "영상콘텐츠",
    subtitle: "Motion, Variety, Product Video",
    description: "모션그래픽부터 사내 예능, 고퀄리티 제품 영상까지 다양한 포맷의 영상 콘텐츠를 제작합니다.",
    tags: ['#Video', '#Production', '#Editing'],
    imageUrl: "https://images.unsplash.com/photo-1492619334760-22402c01594e?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of a professional cinematic camera lens front view, focus on circular glass lens, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'originals',
    matchScore: 99,
    contentType: 'video',
    subItems: [
      { id: 'v-1', title: '모션그래픽', description: '브랜드 아이덴티티를 시각화한 감각적인 모션그래픽 영상입니다.', duration: '2m', assetUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 'v-2', title: '세라랩 (Cera-Lab)', description: '임직원 궁금증 해결을 위한 사내 예능형 콘텐츠 시리즈입니다.', duration: '5m', assetUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: 'v-3', title: '제품영상', description: '제품의 USP를 강조한 고퀄리티 시네마틱 홍보 영상입니다.', duration: '3m', assetUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' }
    ]
  },
  {
    id: 'o-2',
    title: "카드뉴스 콘텐츠",
    subtitle: "Micro Learning & Branding",
    description: "바쁜 업무 중에도 핵심 내용을 놓치지 않도록 직관적인 디자인의 카드뉴스를 제작합니다.",
    tags: ['#Design', '#CardNews', '#Marketing'],
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of newspaper pages and news cards flipping through the air, dynamic motion, modern information design, red and white color palette, dark background, clean geometric shapes.",
    category: 'originals',
    matchScore: 96,
    contentType: 'card',
    subItems: [
      { id: 'c-1', title: '7해빗 카드뉴스', description: '카카오톡 채널 발송용 습관 형성 마이크로 러닝 콘텐츠입니다.', images: ['https://picsum.photos/seed/c1-1/800/800', 'https://picsum.photos/seed/c1-2/800/800', 'https://picsum.photos/seed/c1-3/800/800'] },
      { id: 'c-2', title: '중심을 잡는 척추지식', description: '임직원 건강 관리를 위한 핵심 척추 건강 정보 시리즈입니다.', images: ['https://picsum.photos/seed/c2-1/800/800', 'https://picsum.photos/seed/c2-2/800/800'] },
      { id: 'c-3', title: '의미있는 뷰티사전', description: '뷰티/헬스케어 트렌드를 알기 쉽게 정리한 카드뉴스입니다.', images: ['https://picsum.photos/seed/c3-1/800/800', 'https://picsum.photos/seed/c3-2/800/800', 'https://picsum.photos/seed/c3-3/800/800'] }
    ]
  },
  {
    id: 'o-3',
    title: "웹툰 콘텐츠",
    subtitle: "Story-telling Education",
    description: "어려운 정보도 만화 형식을 통해 친근하고 재미있게 전달하는 교육 웹툰 시리즈입니다.",
    tags: ['#Webtoon', '#Illustration', '#Story'],
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of a hand holding a digital drawing pen sketching a webtoon on a tablet screen, lineless art style, no outlines, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'originals',
    matchScore: 98,
    contentType: 'webtoon',
    subItems: [
      { id: 'w-1', title: '전지적 척추시점', description: '척추의 입장에서 바라본 일상 건강 관리 웹툰입니다.', images: ['https://picsum.photos/seed/w1-1/600/1200', 'https://picsum.photos/seed/w1-2/600/1200', 'https://picsum.photos/seed/w1-3/600/1200'] },
      { id: 'w-2', title: '코어MASTER', description: '코어 근육 강화 및 바른 자세 교육을 위한 에듀테인먼트 웹툰입니다.', images: ['https://picsum.photos/seed/w2-1/600/1200', 'https://picsum.photos/seed/w2-2/600/1200'] },
      { id: 'w-3', title: '스마트 꿀TIP', description: '업무 효율을 높이는 스마트한 도구 사용법을 다룬 꿀팁 웹툰입니다.', images: ['https://picsum.photos/seed/w3-1/600/1200', 'https://picsum.photos/seed/w3-2/600/1200', 'https://picsum.photos/seed/w3-3/600/1200'] }
    ]
  }
];

export const TECH_DATA: Content[] = [
  {
    id: 'tech-1',
    title: "AI 리터러시 교육",
    subtitle: "리더/매니저 대상 프롬프트 엔지니어링",
    description: "ChatGPT, Claude 등을 활용한 업무 효율화 워크샵 진행. 리더급 대상 의사결정 지원 AI 활용법 전파.",
    tags: ['#AI', '#Lecture', '#Prompt'],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of a human brain silhouette with circuit patterns inside, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'tech',
    matchScore: 98,
    year: '2025'
  },
  {
    id: 'tech-2',
    title: "Tableau 심화 교육운영",
    subtitle: "데이터 시각화 역량 강화 과정",
    description: "데이터 시각화 도구 Tableau의 고급 기능을 활용한 데이터 분석 및 인사이트 도출 역량 강화 과정을 기획·운영했습니다.",
    tags: ['#Data', '#Tableau', '#Expert'],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda50a5f4a?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of digital charts and graphs on a screen, data visualization concept, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'tech',
    matchScore: 95,
    year: '2024'
  },
  {
    id: 'tech-3',
    title: "AI 활용 웹페이지 제작",
    subtitle: "Next.js & AI Agent 기반 포트폴리오",
    description: "Gemini API와 AI 에이전트를 활용하여 실시간 이미지 생성 및 동적 콘텐츠 관리가 가능한 현대적인 웹 애플리케이션을 제작했습니다.",
    tags: ['#Web_Dev', '#AI_Agent', '#NextJS'],
    imageUrl: "https://images.unsplash.com/photo-1518433278983-bc62803275ad?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of a web browser window with AI sparkles and code symbols, modern web development concept, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'tech',
    matchScore: 97,
    year: '2025'
  }
];

export const CULTURE_DATA: Content[] = [
  {
    id: 'cul-1',
    title: "사내 웹드라마 제작기",
    subtitle: "조직문화 활성화 프로젝트",
    description: "직원들이 직접 배우로 참여한 사내 웹드라마. 조직 내 소통 부재와 세대 갈등을 유쾌하게 풀어낸 수작.",
    tags: ['#Director', '#Culture', '#Drama'],
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of a film set with a director chair and a camera, red and white color palette, dark background, clean geometric shapes, modern graphic design.",
    category: 'culture',
    matchScore: 99,
    year: '2024'
  },
  {
    id: 'cul-2',
    title: "팀플데이 스케치",
    subtitle: "전사 워크샵 하이라이트",
    description: "딱딱한 워크샵이 아닌, 모두가 즐기는 축제 같은 팀플데이 현장을 역동적인 영상으로 기록했습니다.",
    tags: ['#Event', '#Video', '#TeamBuilding'],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of stylized human figures connecting as puzzle pieces or high-fiving, team collaboration concept, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'culture',
    matchScore: 93,
    year: '2023'
  },
  {
    id: 'cul-3',
    title: "조직문화 포스터",
    subtitle: "핵심가치 내재화 캠페인",
    description: "회사의 핵심가치를 시각적으로 표현한 포스터 시리즈 제작 및 사내 게시.",
    tags: ['#Design', '#CoreValue', '#Campaign'],
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    imagePrompt: "A 2D flat minimalist illustration of a graphic design poster frame on a wall showing abstract icons, branding and identity concept, modern graphic design, red and white color palette, dark background, clean geometric shapes.",
    category: 'culture',
    matchScore: 90,
    year: '2024'
  }
];

export const ALL_CONTENT = [
    ...TRENDING_DATA,
    ...ORIGINALS_DATA,
    ...TECH_DATA,
    ...CULTURE_DATA
];
