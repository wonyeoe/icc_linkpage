import type { Lang } from "../App";

import KR from "../assets/flags/ko.png";
import US from "../assets/flags/us.png";
import CN from "../assets/flags/cn.png";
import JP from "../assets/flags/jp.png";

import IT from "../assets/flags/it.png";
import RU from "../assets/flags/rs.png";
import VI from "../assets/flags/viet.png";
import ID from "../assets/flags/Id.png";

/* ---------- 언어 선택 ---------- */

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
  { code: "it", label: "Italiano", flag: IT },
  { code: "ru", label: "Русский", flag: RU },
  { code: "vi", label: "Tiếng Việt", flag: VI },
  { code: "id", label: "Bahasa Indonesia", flag: ID },
];

/* ---------- 다국어 텍스트 ---------- */

const text = {
  title: {
    ko: "국가별 유학생회",
    en: "International Student Associations",
    zh: "各国留学生会",
    ja: "国別留学生会",
    it: "Associazioni studentesche internazionali",
    ru: "Международные студенческие ассоциации",
    vi: "Hội sinh viên quốc tế",
    id: "Asosiasi mahasiswa internasional",
  } satisfies Record<Lang, string>,
  subtitle: {
    ko: "국가별 공식 커뮤니티 및 SNS 바로가기",
    en: "Official communities & social links by country",
    zh: "各国官方社区与社交平台链接",
    ja: "国別公式コミュニティ・SNSリンク",
    it: "Community ufficiali e link social per paese",
    ru: "Официальные сообщества и ссылки по странам",
    vi: "Cộng đồng chính thức & liên kết mạng xã hội theo quốc gia",
    id: "Komunitas resmi & tautan sosial per negara",
  } satisfies Record<Lang, string>,
  open: {
    ko: "바로가기",
    en: "Open",
    zh: "前往",
    ja: "開く",
    it: "Apri",
    ru: "Открыть",
    vi: "Mở",
    id: "Buka",
  } satisfies Record<Lang, string>,
};

/* ---------- 유학생회 데이터 ---------- */

type IntlItem = {
  country: Record<Lang, string>;
  platform: string;
  href: string;
};

const internationalGroups: IntlItem[] = [
  {
    country: {
      ko: "중국",
      en: "China",
      zh: "中国",
      ja: "中国",
      it: "Cina",
      ru: "Китай",
      vi: "Trung Quốc",
      id: "Tiongkok",
    },
    platform: "WeChat",
    href: "https://www.wechat.com/",
  },
  {
    country: {
      ko: "베트남",
      en: "Vietnam",
      zh: "越南",
      ja: "ベトナム",
      it: "Vietnam",
      ru: "Вьетнам",
      vi: "Việt Nam",
      id: "Vietnam",
    },
    platform: "Facebook",
    href: "https://www.facebook.com/groups/vietnamesestudents.inha",
  },
  {
    country: {
      ko: "키르기스스탄",
      en: "Kyrgyzstan",
      zh: "吉尔吉斯斯坦",
      ja: "キルギス",
      it: "Kirghizistan",
      ru: "Кыргызстан",
      vi: "Kyrgyzstan",
      id: "Kirgizstan",
    },
    platform: "Telegram",
    href: "https://t.me/+aAfyTFDhs981ODE6",
  },
  {
    country: {
      ko: "우즈베키스탄",
      en: "Uzbekistan",
      zh: "乌兹别克斯坦",
      ja: "ウズベキスタン",
      it: "Uzbekistan",
      ru: "Узбекистан",
      vi: "Uzbekistan",
      id: "Uzbekistan",
    },
    platform: "Telegram",
    href: "https://t.me/joinchat/Uray6V68ZRR5Q2Ab",
  },
  {
    country: {
      ko: "우즈베키스탄",
      en: "Uzbekistan",
      zh: "乌兹别克斯坦",
      ja: "ウズベキスタン",
      it: "Uzbekistan",
      ru: "Узбекистан",
      vi: "Uzbekistan",
      id: "Uzbekistan",
    },
    platform: "Facebook",
    href: "https://www.facebook.com/groups/UzbekistanInha/",
  },
  {
    country: {
      ko: "말레이시아",
      en: "Malaysia",
      zh: "马来西亚",
      ja: "マレーシア",
      it: "Malesia",
      ru: "Малайзия",
      vi: "Malaysia",
      id: "Malaysia",
    },
    platform: "Facebook",
    href: "https://www.facebook.com/pg/ppmkofficial/community/",
  },
  {
    country: {
      ko: "미얀마",
      en: "Myanmar",
      zh: "缅甸",
      ja: "ミャンマー",
      it: "Myanmar",
      ru: "Мьянма",
      vi: "Myanmar",
      id: "Myanmar",
    },
    platform: "Facebook",
    href: "https://www.facebook.com/groups/686089089214258/",
  },
];

/* ---------- 컴포넌트 ---------- */

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

/* ---------- 페이지 ---------- */

export default function InternationalPage({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <div className="min-h-dvh bg-white font-sans">
      <LanguageSelector current={lang} onChange={setLang} />

      <div className="mx-auto w-full max-w-md px-6 pb-16 pt-16">
        <h1 className="text-xl font-extrabold text-black">{text.title[lang]}</h1>
        <p className="mt-2 text-sm text-gray-500">{text.subtitle[lang]}</p>

        <div className="mt-8 flex flex-col gap-4">
          {internationalGroups.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border px-4 py-3 transition hover:bg-gray-50"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900">
                  {item.country[lang]}
                </span>
                <span className="text-xs text-gray-500">{item.platform}</span>
              </div>

              <span className="text-sm font-medium text-blue-600">{text.open[lang]}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
