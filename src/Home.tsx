import SchoolLogo from "./assets/Emblem_T01.png";

import KR from "./assets/flags/ko.png";
import US from "./assets/flags/us.png";
import CN from "./assets/flags/cn.png";
import JP from "./assets/flags/jp.png";

import { Link } from "react-router-dom";
import type { Lang } from "./App";

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

const text = {
  title: {
    ko: "인하대학교",
    en: "Inha University",
    zh: "仁荷大学",
    ja: "仁荷大学",
  },
  subtitle: {
    ko: "인하대학교 캠퍼스 생활 가이드",
    en: "Inha Campus Guide",
    zh: "大学必备信息入口",
    ja: "大学必須情報へのリンク",
  },
  links: {
    calendar: {
      ko: "학사일정",
      en: "Academic Calendar",
      zh: "学事日程",
      ja: "学事日程",
    },
    app: {
      ko: "학교 생활 필수 어플",
      en: "Essential Apps",
      zh: "必备应用",
      ja: "必須アプリ",
    },
    scholarship: {
      ko: "장학금",
      en: "Scholarships",
      zh: "奖学金",
      ja: "奨学金",
    },
    dormitory: {
      ko: "인하대학교 생활관",
      en: "Dormitory Information",
      zh: "宿舍信息",
      ja: "学生寮の案内",
    },
    club: {
      ko: "동아리 둘러보기",
      en: "Explore Clubs",
      zh: "查看社团",
      ja: "サークルを見る",
    },
    career: {
      ko: "진로·취업 정보",
      en: "Career & Jobs",
      zh: "就业与发展",
      ja: "進路・就職",
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
  more: {
    ko: "더 자세한 내용은",
    en: "More details",
    zh: "更多信息",
    ja: "詳しくはこちら",
  },
};

type LinkItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
};

function buildLinks(lang: Lang): LinkItem[] {
  return [
    {
      id: "1",
      label: text.links.calendar[lang],
      href: "https://www.inha.ac.kr/kr/1908/subview.do",
      external: true,
    },
    {
      id: "2",
      label: text.links.app[lang],
      href: "/apps",
      external: true,
    },
    {
      id: "3",
      label: text.links.scholarship[lang],
      href: "https://www.inha.ac.kr/kr/1056/subview.do",
      external: true,
    },
    {
      id: "4",
      label: text.links.dormitory[lang],
      href: "https://dorm.inha.ac.kr",
      external: true,
    },
    {
      id: "5",
      label: text.links.club[lang],
      href: "https://www.inha.ac.kr/kr/1299/subview.do",
      external: true,
    },
    {
      id: "6",
      label: text.links.career[lang],
      href: "https://job.inha.ac.kr",
      external: true,
    },
    {
      id: "7",
      label: text.links.intl[lang],
      href: "/international",
      external: true,
    },
  ];
}

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
          className={`h-9 w-9 overflow-hidden rounded-full border transition ${
            current === lang.code ? "border-blue-600" : "border-gray-300"
          }`}
        >
          <img src={lang.flag} alt={lang.label} className="h-full w-full object-cover" />
        </button>
      ))}
    </div>
  );
}

function LinkButton({ item }: { item: LinkItem }) {
  const base =
    "flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-white transition hover:bg-blue-700";

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={base}>
        <span className="text-[15px] font-semibold">{item.label}</span>
      </a>
    );
  }

  return (
    <Link to={item.href} className={base}>
      <span className="text-[15px] font-semibold">{item.label}</span>
    </Link>
  );
}

export default function Home({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const links = buildLinks(lang);

  return (
    <div className="min-h-dvh bg-white font-sans">
      <LanguageSelector current={lang} onChange={setLang} />

      <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 pb-16 pt-16">
        <div className="mb-6 h-24 w-24">
          <img
            src={SchoolLogo}
            alt="학교 로고"
            className="h-full w-full object-contain"
          />
        </div>

        <h1 className="text-xl font-extrabold tracking-tight text-black">
          {text.title[lang]}
        </h1>
        <p className="mt-2 text-sm text-gray-500">{text.subtitle[lang]}</p>

        <div className="mt-8 flex w-full flex-col gap-4">
          {links.map((item) => (
            <LinkButton key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 leading-relaxed">
          <p className="font-medium text-gray-700">{text.contact.title[lang]}</p>
          <p>
            {text.contact.phone[lang]}: 032-860-7035~9
          </p>
          <p>
            {text.contact.email[lang]}: interservice@inha.ac.kr
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://internationalcenter.inha.ac.kr/internationalcenter/9905/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGaW50ZXJuYXRpb25hbGNlbnRlciUyRjI1MDclMkYxNTQ2MTclMkZhcnRjbFZpZXcuZG8lM0ZwYWdlJTNEMSUyNnNyY2hDb2x1bW4lM0QlMjZzcmNoV3JkJTNEJTI2YmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700"
          >
            {text.more[lang]}
          </a>
        </div>
      </div>
    </div>
  );
}
