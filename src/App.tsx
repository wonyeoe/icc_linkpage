import { useState } from "react";
import SchoolLogo from "./assets/Emblem_T01.png";

import KR from "./assets/flags/ko.png";
import US from "./assets/flags/us.png";
import CN from "./assets/flags/cn.png";
import JP from "./assets/flags/jp.png";

/* ---------------- 언어 설정 ---------------- */

type Lang = "ko" | "en" | "zh" | "ja";

type Language = {
  code: Lang;
  label: string;
  flag: string;
};

const languages: Language[] = [
  { code: "ko", label: "한국어", flag: KR },
  { code: "en", label: "English", flag: US },
  { code: "zh", label: "中文", flag: CN },
  { code: "ja", label: "日本語", flag: JP },
];

/* ---------------- 텍스트 사전 ---------------- */

const text = {
  title: {
    ko: "인하대학교",
    en: "Inha University",
    zh: "仁荷大学",
    ja: "仁荷大学",
  },
  subtitle: {
    ko: "필수 정보 바로가기",
    en: "Essential Links",
    zh: "重要信息快捷入口",
    ja: "必須情報へのリンク",
  },
  links: {
    calendar: {
      ko: "학사일정",
      en: "Academic Calendar",
      zh: "学事日程",
      ja: "学事日程",
    },
    app: {
      ko: "필수 어플",
      en: "Required Apps",
      zh: "必备应用",
      ja: "必須アプリ",
    },
    scholarship: {
      ko: "장학금",
      en: "Scholarships",
      zh: "奖学金",
      ja: "奨学金",
    },
    club: {
      ko: "동아리",
      en: "Clubs",
      zh: "社团",
      ja: "サークル",
    },
    career: {
      ko: "진로 가이드",
      en: "Career Guide",
      zh: "就业指南",
      ja: "進路ガイド",
    },
    intl: {
      ko: "국가별 유학생회",
      en: "International Student Groups",
      zh: "各国留学生会",
      ja: "国別留学生会",
    },
  },
  contact: {
    title: {
      ko: "국제지원팀",
      en: "International Support Office",
      zh: "国际支援组",
      ja: "国際支援チーム",
    },
    phone: {
      ko: "전화",
      en: "Tel",
      zh: "电话",
      ja: "電話",
    },
    email: {
      ko: "이메일",
      en: "Email",
      zh: "邮箱",
      ja: "メール",
    },
  },
};

/* ---------------- 링크 데이터 ---------------- */

type LinkItem = {
  id: string;
  label: string;
  href: string;
};

function buildLinks(lang: Lang): LinkItem[] {
  return [
    {
      id: "1",
      label: text.links.calendar[lang],
      href: "https://www.inha.ac.kr/kr/1908/subview.do",
    },
    { id: "2", label: text.links.app[lang], href: "#" },
    { id: "3", label: text.links.scholarship[lang], href: "#" },
    { id: "4", label: text.links.club[lang], href: "#" },
    { id: "5", label: text.links.career[lang], href: "#" },
    { id: "6", label: text.links.intl[lang], href: "#" },
  ];
}

/* ---------------- 컴포넌트 ---------------- */

function LanguageSelector({
  current,
  onChange,
}: {
  current: Lang;
  onChange: (lang: Lang) => void;
}) {
  return (
    <div className="fixed right-4 top-4 z-50 flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onChange(lang.code)}
          title={lang.label}
          className={`h-9 w-9 overflow-hidden rounded-full border transition
            ${
              current === lang.code
                ? "border-blue-600"
                : "border-gray-300"
            }`}
        >
          <img
            src={lang.flag}
            alt={lang.label}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}

function LinkButton({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      className="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-white transition hover:bg-blue-700"
    >
      <span className="text-[15px] font-semibold">{item.label}</span>
    </a>
  );
}

/* ---------------- App ---------------- */

export default function App() {
  const [lang, setLang] = useState<Lang>("ko");
  const links = buildLinks(lang);

  return (
    <div className="min-h-dvh bg-white font-sans">
      {/* 오른쪽 상단 국기 */}
      <LanguageSelector current={lang} onChange={setLang} />

      <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 pb-16 pt-16">
        {/* 로고 */}
        <div className="mb-6 h-24 w-24">
          <img
            src={SchoolLogo}
            alt="학교 로고"
            className="h-full w-full object-contain"
          />
        </div>

        {/* 타이틀 */}
        <h1 className="text-xl font-extrabold tracking-tight text-black">
          {text.title[lang]}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          {text.subtitle[lang]}
        </p>

        {/* 링크 버튼 */}
        <div className="mt-8 flex w-full flex-col gap-4">
          {links.map((item) => (
            <LinkButton key={item.id} item={item} />
          ))}
        </div>

        {/* 국제지원팀 정보 */}
        <div className="mt-10 text-center text-sm text-gray-500 leading-relaxed">
          <p className="font-medium text-gray-700">
            {text.contact.title[lang]}
          </p>
          <p>
            {text.contact.phone[lang]}: 032-860-7035~9
          </p>
          <p>
            {text.contact.email[lang]}: interservice@inha.ac.kr
          </p>
        </div>
      </div>
    </div>
  );
}
