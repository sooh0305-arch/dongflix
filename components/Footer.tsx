import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Smartphone, Copy, Check, Send, X, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [company, setCompany] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [replyContact, setReplyContact] = useState('');
  const [proposalMessage, setProposalMessage] = useState('');

  const targetEmail = 'sooj0305@naver.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoUrl = (customCompany = company, customPerson = contactPerson, customContact = replyContact, customMsg = proposalMessage) => {
    const subject = encodeURIComponent(`[DONG-FLIX] 입사 제안 및 채용 문의${customCompany ? ` - ${customCompany}` : ''}`);
    const body = encodeURIComponent(
      `안녕하세요, 이동현 님.\n\n` +
      `DONG-FLIX 포트폴리오를 확인하고 입사 제안 및 채용 관련 문의를 드립니다.\n\n` +
      `■ 회사/기관명: ${customCompany || '(회사명을 입력해주세요)'}\n` +
      `■ 제안 담당자: ${customPerson || '(담당자명/직책)'}\n` +
      `■ 회신 연락처: ${customContact || '(이메일 또는 전화번호)'}\n\n` +
      `■ 제안 포지션 및 내용:\n${customMsg || '(제안하시는 포지션, 주요 직무, 안내 사항 등을 작성해주세요.)'}\n\n` +
      `감사합니다.`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = getMailtoUrl();
  };

  return (
    <footer className="w-full max-w-[1000px] mx-auto px-4 py-20 mt-12 text-[#808080] text-sm" id="contact">
      <div className="flex space-x-6 mb-8">
        <Instagram className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <Linkedin className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <button 
          onClick={() => setIsModalOpen(true)}
          title="sooj0305@naver.com 메일 문의"
          className="hover:text-white transition"
        >
          <Mail className="w-6 h-6 cursor-pointer" />
        </button>
        <a 
          href="tel:010-4574-8305" 
          title="전화 연결"
          className="hover:text-white transition"
        >
          <Smartphone className="w-6 h-6 cursor-pointer" />
        </a>
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
          <li className="mb-3 hover:underline cursor-pointer" onClick={() => setIsModalOpen(true)}>
            입사 제안
          </li>
          <li className="mb-3 hover:underline cursor-pointer">이용 약관</li>
          <li className="mb-3 hover:underline cursor-pointer">개인정보</li>
        </ul>
        <ul>
          <li className="mb-3">이동현 (Dong Hyun)</li>
          <li className="mb-3">
            <a href="tel:010-4574-8305" className="hover:underline hover:text-white transition">
              010-4574-8305
            </a>
          </li>
          <li 
            className="mb-3 hover:underline cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {targetEmail}
          </li>
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

      {/* 입사 제안 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#181818] border border-[#333] rounded-xl shadow-2xl overflow-hidden text-white">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#282828] bg-[#141414]">
              <div className="flex items-center space-x-2">
                <span className="text-[#E50914] font-black font-bebas text-2xl tracking-tight">DONG-FLIX</span>
                <span className="text-white font-bold text-base">입사 제안 및 채용 문의</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-[#282828] transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-sm">
              {/* Receiver Info Box */}
              <div className="bg-[#202020] border border-[#2d2d2d] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">수신인 이메일 (이동현)</div>
                  <div className="font-mono text-base font-semibold text-white select-all">
                    {targetEmail}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition ${
                    copied 
                      ? 'bg-green-600 text-white' 
                      : 'bg-[#333] hover:bg-[#444] text-gray-200'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>이메일 주소 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Form to compose proposal */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      회사 / 기관명
                    </label>
                    <input
                      type="text"
                      placeholder="예: 세라젬 인사팀"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] text-xs transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      담당자명 / 직책
                    </label>
                    <input
                      type="text"
                      placeholder="예: 채용담당 김매니저"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] text-xs transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    회신 연락처 (이메일 또는 전화번호)
                  </label>
                  <input
                    type="text"
                    placeholder="예: hr@company.com / 010-0000-0000"
                    value={replyContact}
                    onChange={(e) => setReplyContact(e.target.value)}
                    className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] text-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    제안 포지션 및 주요 내용
                  </label>
                  <textarea
                    rows={3}
                    placeholder="제안하시고자 하는 직무, 프로젝트, 또는 포지션에 대한 내용을 자유롭게 적어주세요."
                    value={proposalMessage}
                    onChange={(e) => setProposalMessage(e.target.value)}
                    className="w-full bg-[#111] border border-[#333] rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] text-xs transition resize-none"
                  />
                </div>

                {/* Submit & Quick Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#f6121d] text-white font-bold py-2.5 px-4 rounded transition shadow-lg text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>이메일 프로그램으로 보내기</span>
                  </button>

                  <a
                    href={getMailtoUrl()}
                    className="sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#2a2a2a] hover:bg-[#333] text-gray-200 text-xs font-semibold rounded transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>바로 메일 앱 열기</span>
                  </a>
                </div>
              </form>

              <p className="text-[11px] text-gray-400 text-center leading-relaxed">
                버튼을 누르면 PC나 모바일의 기본 메일 앱(Outlook, Apple Mail, Gmail 등)이 실행되며,
                메일 앱이 없는 경우 상단의 <strong className="text-gray-300">이메일 주소 복사</strong>를 눌러 직접 발송하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;