import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Smartphone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1000px] mx-auto px-4 py-20 mt-12 text-[#808080] text-sm" id="contact">
      <div className="flex space-x-6 mb-8">
        <Instagram className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <Linkedin className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <a href="mailto:sooh0305@naver.com">
          <Mail className="w-6 h-6 cursor-pointer hover:text-white transition" />
        </a>
        <Smartphone className="w-6 h-6 cursor-pointer hover:text-white transition" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <ul>
          <li className="mb-3 hover:underline cursor-pointer">자막 설정</li>
          <li className="mb-3 hover:underline cursor-pointer">고객 센터</li>
          <li className="mb-3 hover:underline cursor-pointer">기프트 카드</li>
          <li className="mb-3 hover:underline cursor-pointer">미디어 센터</li>
        </ul>
        <ul>
          <li className="mb-3 hover:underline cursor-pointer">투자 정보(Skill)</li>
          <li className="mb-3 hover:underline cursor-pointer">입사 제안</li>
          <li className="mb-3 hover:underline cursor-pointer">이용 약관</li>
          <li className="mb-3 hover:underline cursor-pointer">개인정보</li>
        </ul>
        <ul>
            <li className="mb-3 hover:underline cursor-pointer">이동현 (Dong Hyun)</li>
            <li className="mb-3 hover:underline cursor-pointer">010-4574-8305</li>
            <li className="mb-3 hover:underline cursor-pointer">sooh0305@naver.com</li>
        </ul>
      </div>

      <button className="border border-gray-500 px-4 py-1 mb-6 hover:text-white text-xs">
        서비스 코드: D-O-N-G-2026
      </button>

      <p className="text-[11px] leading-relaxed">
        <strong>DONG-FLIX 대한민국</strong> <br/>
        이 포트폴리오는 개인의 역량을 보여주기 위해 제작된 컨셉 페이지입니다.<br/>
        실제 넷플릭스와는 무관하며, 상업적 용도로 사용되지 않습니다.
      </p>
    </footer>
  );
};

export default Footer;