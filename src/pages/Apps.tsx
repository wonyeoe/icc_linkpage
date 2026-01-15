import type { Lang } from "../App";

import KR from "../assets/flags/ko.png";
import US from "../assets/flags/us.png";
import CN from "../assets/flags/cn.png";
import JP from "../assets/flags/jp.png";

import Naver from "../assets/apps/naver.png";
import Daum from "../assets/apps/daum.png";
import KakaoTalk from "../assets/apps/kakao.png";
import Line from "../assets/apps/line.png";

import NaverMap from "../assets/apps/navermap.png";
import KakaoTaxi from "../assets/apps/kakaotaxi.png";
import Subway from "../assets/apps/subway.png";
import Bus from "../assets/apps/bus.png";

import Gmarket from "../assets/apps/gmarket.png";
import Coupang from "../assets/apps/coupang.png";

import Baemin from "../assets/apps/baemin.png";
import Yogiyo from "../assets/apps/yogiyo.png";
import CoupangEats from "../assets/apps/coupangeats.png";

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

type AppItemI18n = {
  name: Record<Lang, string>;
  sub: Record<Lang, string>;
  desc: Record<Lang, string>;
  icon: string;
  href?: string;
};

type AppSectionI18n = {
  title: Record<Lang, string>;
  items: AppItemI18n[];
};

const sections: AppSectionI18n[] = [
  {
    title: {
      ko: "1. 온라인 검색 포털",
      en: "1. Online Search Portals",
      zh: "1. 在线搜索门户",
      ja: "1. オンライン検索ポータル",
    },
    items: [
      {
        name: { ko: "네이버", en: "Naver", zh: "Naver", ja: "Naver" },
        sub: { ko: "NAVER", en: "NAVER", zh: "NAVER", ja: "NAVER" },
        desc: {
          ko: "한국에서 가장 많이 쓰는 검색 포털",
          en: "The most widely used search portal in Korea",
          zh: "韩国使用最广泛的搜索门户",
          ja: "韓国で最も使われる検索ポータル",
        },
        icon: Naver,
        href: "https://www.naver.com",
      },
      {
        name: { ko: "다음", en: "Daum", zh: "Daum", ja: "Daum" },
        sub: { ko: "Daum", en: "Daum", zh: "Daum", ja: "Daum" },
        desc: {
          ko: "뉴스/메일/검색을 한 번에",
          en: "News, mail, and search in one place",
          zh: "新闻/邮箱/搜索一站式",
          ja: "ニュース/メール/検索をまとめて",
        },
        icon: Daum,
        href: "https://www.daum.net",
      },
    ],
  },
  {
    title: {
      ko: "2. 모바일 메신저",
      en: "2. Messaging Apps",
      zh: "2. 即时通讯",
      ja: "2. メッセンジャー",
    },
    items: [
      {
        name: { ko: "카카오톡", en: "KakaoTalk", zh: "KakaoTalk", ja: "KakaoTalk" },
        sub: { ko: "KakaoTalk", en: "KakaoTalk", zh: "KakaoTalk", ja: "KakaoTalk" },
        desc: {
          ko: "한국에서 가장 많이 쓰는 메신저",
          en: "The #1 messenger app in Korea",
          zh: "韩国最常用的聊天软件",
          ja: "韓国で最も使われるメッセンジャー",
        },
        icon: KakaoTalk,
      },
      {
        name: { ko: "라인", en: "LINE", zh: "LINE", ja: "LINE" },
        sub: { ko: "LINE", en: "LINE", zh: "LINE", ja: "LINE" },
        desc: {
          ko: "일본/동남아에서도 많이 사용",
          en: "Popular in Japan and Southeast Asia",
          zh: "在日本/东南亚也很常用",
          ja: "日本/東南アジアでも人気",
        },
        icon: Line,
      },
    ],
  },
  {
    title: {
      ko: "3. 교통 앱",
      en: "3. Transportation Apps",
      zh: "3. 交通应用",
      ja: "3. 交通アプリ",
    },
    items: [
      {
        name: { ko: "네이버지도", en: "Naver Map", zh: "Naver Map", ja: "Naver Map" },
        sub: { ko: "Naver Map", en: "Naver Map", zh: "Naver Map", ja: "Naver Map" },
        desc: {
          ko: "지도/길찾기/대중교통",
          en: "Maps, directions, and public transit",
          zh: "地图/导航/公共交通",
          ja: "地図/経路/公共交通",
        },
        icon: NaverMap,
      },
      {
        name: { ko: "카카오T(택시)", en: "Kakao T", zh: "Kakao T", ja: "Kakao T" },
        sub: { ko: "Kakao Taxi", en: "Kakao Taxi", zh: "Kakao Taxi", ja: "Kakao Taxi" },
        desc: {
          ko: "택시 호출/예상 요금 확인",
          en: "Call a taxi and check estimated fares",
          zh: "叫车/查看预估费用",
          ja: "タクシー配車/料金目安",
        },
        icon: KakaoTaxi,
      },
      {
        name: { ko: "지하철 종결자", en: "Subway", zh: "Subway", ja: "Subway" },
        sub: { ko: "Subway", en: "Subway", zh: "Subway", ja: "Subway" },
        desc: {
          ko: "노선/환승/운행시간 확인",
          en: "Lines, transfers, and schedules",
          zh: "线路/换乘/时刻表",
          ja: "路線/乗換/時刻表",
        },
        icon: Subway,
      },
      {
        name: { ko: "전국 스마트버스", en: "Bus", zh: "Bus", ja: "Bus" },
        sub: { ko: "Bus", en: "Bus", zh: "Bus", ja: "Bus" },
        desc: {
          ko: "버스 실시간/정류장 정보",
          en: "Real-time bus and stop info",
          zh: "实时公交/站点信息",
          ja: "バス実時間/停留所情報",
        },
        icon: Bus,
      },
    ],
  },
  {
    title: {
      ko: "4. 온라인 쇼핑 앱",
      en: "4. Shopping Apps",
      zh: "4. 购物应用",
      ja: "4. ショッピング",
    },
    items: [
      {
        name: { ko: "G마켓", en: "Gmarket", zh: "Gmarket", ja: "Gmarket" },
        sub: { ko: "Gmarket", en: "Gmarket", zh: "Gmarket", ja: "Gmarket" },
        desc: {
          ko: "해외 사용자용 언어 지원",
          en: "Supports multiple languages for global users",
          zh: "支持多语言，海外用户友好",
          ja: "多言語対応（海外ユーザー向け）",
        },
        icon: Gmarket,
      },
      {
        name: { ko: "쿠팡", en: "Coupang", zh: "Coupang", ja: "Coupang" },
        sub: { ko: "Coupang", en: "Coupang", zh: "Coupang", ja: "Coupang" },
        desc: {
          ko: "로켓배송으로 빠른 쇼핑",
          en: "Fast delivery with Rocket Shipping",
          zh: "火箭配送，送货很快",
          ja: "ロケット配送でスピーディー",
        },
        icon: Coupang,
      },
    ],
  },
  {
    title: {
      ko: "5. 온라인 음식배달 앱",
      en: "5. Food Delivery Apps",
      zh: "5. 外卖应用",
      ja: "5. フードデリバリー",
    },
    items: [
      {
        name: { ko: "배달의민족", en: "Baemin", zh: "Baemin", ja: "Baemin" },
        sub: { ko: "Baemin", en: "Baemin", zh: "Baemin", ja: "Baemin" },
        desc: {
          ko: "배달 앱 대표 서비스",
          en: "One of the biggest delivery apps in Korea",
          zh: "韩国代表性的外卖平台",
          ja: "韓国の代表的デリバリー",
        },
        icon: Baemin,
      },
      {
        name: { ko: "요기요", en: "Yogiyo", zh: "Yogiyo", ja: "Yogiyo" },
        sub: { ko: "Yogiyo", en: "Yogiyo", zh: "Yogiyo", ja: "Yogiyo" },
        desc: {
          ko: "할인/쿠폰을 자주 제공",
          en: "Frequent discounts and coupons",
          zh: "经常提供折扣/优惠券",
          ja: "割引/クーポンが多い",
        },
        icon: Yogiyo,
      },
      {
        name: { ko: "쿠팡이츠", en: "Coupang Eats", zh: "Coupang Eats", ja: "Coupang Eats" },
        sub: { ko: "Coupang Eats", en: "Coupang Eats", zh: "Coupang Eats", ja: "Coupang Eats" },
        desc: {
          ko: "빠른 배달 서비스",
          en: "Fast delivery service",
          zh: "配送速度快",
          ja: "配達が速い",
        },
        icon: CoupangEats,
      },
    ],
  },
];

const i18n = {
  pageTitle: {
    ko: "학교 생활 필수 어플",
    en: "Essential Apps",
    zh: "必备应用",
    ja: "必須アプリ",
  },
  openSite: {
    ko: "사이트 열기",
    en: "Open site",
    zh: "打开网站",
    ja: "サイトを開く",
  },
};

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

function SectionTable({
  section,
  lang,
}: {
  section: AppSectionI18n;
  lang: Lang;
}) {
  const gridClass =
    section.items.length === 4
      ? "grid grid-cols-2 sm:grid-cols-4 gap-0 border border-gray-300"
      : "grid grid-cols-2 sm:grid-cols-2 gap-0 border border-gray-300";

  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold text-gray-800">
        {section.title[lang]}
      </h3>

      <div className="mt-2">
        <div className={gridClass}>
          {section.items.map((it) => (
            <div
              key={it.name.en + it.sub.en}
              className="border-r border-b border-gray-300 p-3 last:border-r-0"
            >
              <div className="flex items-center justify-center">
                <div className="h-16 w-16 overflow-hidden rounded-md bg-white">
                  <img
                    src={it.icon}
                    alt={it.name[lang]}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              <div className="mt-2 text-center text-xs text-gray-900">
                <span className="font-semibold">{it.name[lang]}</span>{" "}
                <span className="text-gray-500">({it.sub[lang]})</span>
              </div>

              <div className="mt-2 text-center text-[11px] leading-relaxed text-gray-600">
                {it.desc[lang]}
              </div>

              {it.href ? (
                <div className="mt-2 text-center">
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700"
                  >
                    {i18n.openSite[lang]}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AppsPage({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <div className="min-h-dvh bg-white font-sans">
      <LanguageSelector current={lang} onChange={setLang} />

      <div className="mx-auto w-full max-w-3xl px-6 pb-16 pt-10">

        <h1 className="mt-6 text-xl font-extrabold tracking-tight text-black">
          {i18n.pageTitle[lang]}
        </h1>

        <div className="mt-6">
          {sections.map((s) => (
            <SectionTable key={s.title.en} section={s} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  );
}
