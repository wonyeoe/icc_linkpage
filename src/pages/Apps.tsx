import type { Lang } from "../App";

import KR from "../assets/flags/ko.png";
import US from "../assets/flags/us.png";
import CN from "../assets/flags/cn.png";
import JP from "../assets/flags/jp.png";

import IT from "../assets/flags/it.png";
import RU from "../assets/flags/rs.png";
import VI from "../assets/flags/viet.png";
import ID from "../assets/flags/id.png";

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
  { code: "it", label: "Italiano", flag: IT },
  { code: "ru", label: "Русский", flag: RU },
  { code: "vi", label: "Tiếng Việt", flag: VI },
  { code: "id", label: "Bahasa Indonesia", flag: ID },
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
      it: "1. Portali di ricerca online",
      ru: "1. Поисковые порталы",
      vi: "1. Cổng tìm kiếm trực tuyến",
      id: "1. Portal pencarian online",
    },
    items: [
      {
        name: {
          ko: "네이버",
          en: "Naver",
          zh: "Naver",
          ja: "Naver",
          it: "Naver",
          ru: "Naver",
          vi: "Naver",
          id: "Naver",
        },
        sub: {
          ko: "NAVER",
          en: "NAVER",
          zh: "NAVER",
          ja: "NAVER",
          it: "NAVER",
          ru: "NAVER",
          vi: "NAVER",
          id: "NAVER",
        },
        desc: {
          ko: "한국에서 가장 많이 쓰는 검색 포털",
          en: "The most widely used search portal in Korea",
          zh: "韩国使用最广泛的搜索门户",
          ja: "韓国で最も使われる検索ポータル",
          it: "Il portale di ricerca più usato in Corea",
          ru: "Самый популярный поисковый портал в Корее",
          vi: "Cổng tìm kiếm được dùng nhiều nhất ở Hàn Quốc",
          id: "Portal pencarian yang paling banyak digunakan di Korea",
        },
        icon: Naver,
        href: "https://www.naver.com",
      },
      {
        name: {
          ko: "다음",
          en: "Daum",
          zh: "Daum",
          ja: "Daum",
          it: "Daum",
          ru: "Daum",
          vi: "Daum",
          id: "Daum",
        },
        sub: {
          ko: "Daum",
          en: "Daum",
          zh: "Daum",
          ja: "Daum",
          it: "Daum",
          ru: "Daum",
          vi: "Daum",
          id: "Daum",
        },
        desc: {
          ko: "뉴스/메일/검색을 한 번에",
          en: "News, mail, and search in one place",
          zh: "新闻/邮箱/搜索一站式",
          ja: "ニュース/メール/検索をまとめて",
          it: "Notizie, mail e ricerca in un unico posto",
          ru: "Новости, почта и поиск в одном месте",
          vi: "Tin tức, email và tìm kiếm trong một nơi",
          id: "Berita, email, dan pencarian dalam satu tempat",
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
      it: "2. App di messaggistica",
      ru: "2. Мессенджеры",
      vi: "2. Ứng dụng nhắn tin",
      id: "2. Aplikasi pesan",
    },
    items: [
      {
        name: {
          ko: "카카오톡",
          en: "KakaoTalk",
          zh: "KakaoTalk",
          ja: "KakaoTalk",
          it: "KakaoTalk",
          ru: "KakaoTalk",
          vi: "KakaoTalk",
          id: "KakaoTalk",
        },
        sub: {
          ko: "KakaoTalk",
          en: "KakaoTalk",
          zh: "KakaoTalk",
          ja: "KakaoTalk",
          it: "KakaoTalk",
          ru: "KakaoTalk",
          vi: "KakaoTalk",
          id: "KakaoTalk",
        },
        desc: {
          ko: "한국에서 가장 많이 쓰는 메신저",
          en: "The #1 messenger app in Korea",
          zh: "韩国最常用的聊天软件",
          ja: "韓国で最も使われるメッセンジャー",
          it: "L'app di messaggistica n.1 in Corea",
          ru: "Мессенджер №1 в Корее",
          vi: "Ứng dụng nhắn tin số 1 ở Hàn Quốc",
          id: "Aplikasi pesan #1 di Korea",
        },
        icon: KakaoTalk,
      },
      {
        name: {
          ko: "라인",
          en: "LINE",
          zh: "LINE",
          ja: "LINE",
          it: "LINE",
          ru: "LINE",
          vi: "LINE",
          id: "LINE",
        },
        sub: {
          ko: "LINE",
          en: "LINE",
          zh: "LINE",
          ja: "LINE",
          it: "LINE",
          ru: "LINE",
          vi: "LINE",
          id: "LINE",
        },
        desc: {
          ko: "일본/동남아에서도 많이 사용",
          en: "Popular in Japan and Southeast Asia",
          zh: "在日本/东南亚也很常用",
          ja: "日本/東南アジアでも人気",
          it: "Molto usata in Giappone e nel Sud-est asiatico",
          ru: "Популярен в Японии и Юго-Восточной Азии",
          vi: "Phổ biến ở Nhật Bản và Đông Nam Á",
          id: "Populer di Jepang dan Asia Tenggara",
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
      it: "3. App di trasporto",
      ru: "3. Транспортные приложения",
      vi: "3. Ứng dụng giao thông",
      id: "3. Aplikasi transportasi",
    },
    items: [
      {
        name: {
          ko: "네이버지도",
          en: "Naver Map",
          zh: "Naver Map",
          ja: "Naver Map",
          it: "Naver Map",
          ru: "Naver Map",
          vi: "Naver Map",
          id: "Naver Map",
        },
        sub: {
          ko: "Naver Map",
          en: "Naver Map",
          zh: "Naver Map",
          ja: "Naver Map",
          it: "Naver Map",
          ru: "Naver Map",
          vi: "Naver Map",
          id: "Naver Map",
        },
        desc: {
          ko: "지도/길찾기/대중교통",
          en: "Maps, directions, and public transit",
          zh: "地图/导航/公共交通",
          ja: "地図/経路/公共交通",
          it: "Mappe, indicazioni e trasporto pubblico",
          ru: "Карты, маршруты и общественный транспорт",
          vi: "Bản đồ, chỉ đường và phương tiện công cộng",
          id: "Peta, petunjuk arah, dan transportasi umum",
        },
        icon: NaverMap,
      },
      {
        name: {
          ko: "카카오T(택시)",
          en: "Kakao T",
          zh: "Kakao T",
          ja: "Kakao T",
          it: "Kakao T",
          ru: "Kakao T",
          vi: "Kakao T",
          id: "Kakao T",
        },
        sub: {
          ko: "Kakao Taxi",
          en: "Kakao Taxi",
          zh: "Kakao Taxi",
          ja: "Kakao Taxi",
          it: "Kakao Taxi",
          ru: "Kakao Taxi",
          vi: "Kakao Taxi",
          id: "Kakao Taxi",
        },
        desc: {
          ko: "택시 호출/예상 요금 확인",
          en: "Call a taxi and check estimated fares",
          zh: "叫车/查看预估费用",
          ja: "タクシー配車/料金目安",
          it: "Chiama un taxi e controlla la tariffa stimata",
          ru: "Вызов такси и проверка примерной стоимости",
          vi: "Gọi taxi và xem ước tính cước phí",
          id: "Pesan taksi dan cek perkiraan tarif",
        },
        icon: KakaoTaxi,
      },
      {
        name: {
          ko: "지하철 종결자",
          en: "Subway",
          zh: "Subway",
          ja: "Subway",
          it: "Subway",
          ru: "Subway",
          vi: "Subway",
          id: "Subway",
        },
        sub: {
          ko: "Subway",
          en: "Subway",
          zh: "Subway",
          ja: "Subway",
          it: "Subway",
          ru: "Subway",
          vi: "Subway",
          id: "Subway",
        },
        desc: {
          ko: "노선/환승/운행시간 확인",
          en: "Lines, transfers, and schedules",
          zh: "线路/换乘/时刻表",
          ja: "路線/乗換/時刻表",
          it: "Linee, cambi e orari",
          ru: "Линии, пересадки и расписание",
          vi: "Tuyến, chuyển tuyến và lịch chạy",
          id: "Rute, transit, dan jadwal",
        },
        icon: Subway,
      },
      {
        name: {
          ko: "전국 스마트버스",
          en: "Bus",
          zh: "Bus",
          ja: "Bus",
          it: "Bus",
          ru: "Bus",
          vi: "Bus",
          id: "Bus",
        },
        sub: {
          ko: "Bus",
          en: "Bus",
          zh: "Bus",
          ja: "Bus",
          it: "Bus",
          ru: "Bus",
          vi: "Bus",
          id: "Bus",
        },
        desc: {
          ko: "버스 실시간/정류장 정보",
          en: "Real-time bus and stop info",
          zh: "实时公交/站点信息",
          ja: "バス実時間/停留所情報",
          it: "Info bus e fermate in tempo reale",
          ru: "Информация о автобусах и остановках в реальном времени",
          vi: "Thông tin xe buýt và điểm dừng theo thời gian thực",
          id: "Info bus dan halte secara real-time",
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
      it: "4. App di shopping online",
      ru: "4. Приложения для покупок",
      vi: "4. Ứng dụng mua sắm",
      id: "4. Aplikasi belanja",
    },
    items: [
      {
        name: {
          ko: "G마켓",
          en: "Gmarket",
          zh: "Gmarket",
          ja: "Gmarket",
          it: "Gmarket",
          ru: "Gmarket",
          vi: "Gmarket",
          id: "Gmarket",
        },
        sub: {
          ko: "Gmarket",
          en: "Gmarket",
          zh: "Gmarket",
          ja: "Gmarket",
          it: "Gmarket",
          ru: "Gmarket",
          vi: "Gmarket",
          id: "Gmarket",
        },
        desc: {
          ko: "해외 사용자용 언어 지원",
          en: "Supports multiple languages for global users",
          zh: "支持多语言，海外用户友好",
          ja: "多言語対応（海外ユーザー向け）",
          it: "Supporta più lingue per utenti internazionali",
          ru: "Поддерживает несколько языков для иностранных пользователей",
          vi: "Hỗ trợ nhiều ngôn ngữ cho người dùng quốc tế",
          id: "Mendukung banyak bahasa untuk pengguna global",
        },
        icon: Gmarket,
      },
      {
        name: {
          ko: "쿠팡",
          en: "Coupang",
          zh: "Coupang",
          ja: "Coupang",
          it: "Coupang",
          ru: "Coupang",
          vi: "Coupang",
          id: "Coupang",
        },
        sub: {
          ko: "Coupang",
          en: "Coupang",
          zh: "Coupang",
          ja: "Coupang",
          it: "Coupang",
          ru: "Coupang",
          vi: "Coupang",
          id: "Coupang",
        },
        desc: {
          ko: "로켓배송으로 빠른 쇼핑",
          en: "Fast delivery with Rocket Shipping",
          zh: "火箭配送，送货很快",
          ja: "ロケット配送でスピーディー",
          it: "Consegna rapida con Rocket Shipping",
          ru: "Быстрая доставка Rocket Shipping",
          vi: "Giao hàng nhanh với Rocket Shipping",
          id: "Pengiriman cepat dengan Rocket Shipping",
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
      it: "5. App di consegna cibo",
      ru: "5. Доставка еды",
      vi: "5. Ứng dụng giao đồ ăn",
      id: "5. Aplikasi pesan-antar makanan",
    },
    items: [
      {
        name: {
          ko: "배달의민족",
          en: "Baemin",
          zh: "Baemin",
          ja: "Baemin",
          it: "Baemin",
          ru: "Baemin",
          vi: "Baemin",
          id: "Baemin",
        },
        sub: {
          ko: "Baemin",
          en: "Baemin",
          zh: "Baemin",
          ja: "Baemin",
          it: "Baemin",
          ru: "Baemin",
          vi: "Baemin",
          id: "Baemin",
        },
        desc: {
          ko: "배달 앱 대표 서비스",
          en: "One of the biggest delivery apps in Korea",
          zh: "韩国代表性的外卖平台",
          ja: "韓国の代表的デリバリー",
          it: "Uno dei principali servizi di consegna in Corea",
          ru: "Один из крупнейших сервисов доставки в Корее",
          vi: "Một trong những ứng dụng giao đồ ăn lớn nhất ở Hàn Quốc",
          id: "Salah satu aplikasi pesan-antar terbesar di Korea",
        },
        icon: Baemin,
      },
      {
        name: {
          ko: "요기요",
          en: "Yogiyo",
          zh: "Yogiyo",
          ja: "Yogiyo",
          it: "Yogiyo",
          ru: "Yogiyo",
          vi: "Yogiyo",
          id: "Yogiyo",
        },
        sub: {
          ko: "Yogiyo",
          en: "Yogiyo",
          zh: "Yogiyo",
          ja: "Yogiyo",
          it: "Yogiyo",
          ru: "Yogiyo",
          vi: "Yogiyo",
          id: "Yogiyo",
        },
        desc: {
          ko: "할인/쿠폰을 자주 제공",
          en: "Frequent discounts and coupons",
          zh: "经常提供折扣/优惠券",
          ja: "割引/クーポンが多い",
          it: "Offre spesso sconti e coupon",
          ru: "Часто предлагает скидки и купоны",
          vi: "Thường xuyên có giảm giá và mã coupon",
          id: "Sering memberikan diskon dan kupon",
        },
        icon: Yogiyo,
      },
      {
        name: {
          ko: "쿠팡이츠",
          en: "Coupang Eats",
          zh: "Coupang Eats",
          ja: "Coupang Eats",
          it: "Coupang Eats",
          ru: "Coupang Eats",
          vi: "Coupang Eats",
          id: "Coupang Eats",
        },
        sub: {
          ko: "Coupang Eats",
          en: "Coupang Eats",
          zh: "Coupang Eats",
          ja: "Coupang Eats",
          it: "Coupang Eats",
          ru: "Coupang Eats",
          vi: "Coupang Eats",
          id: "Coupang Eats",
        },
        desc: {
          ko: "빠른 배달 서비스",
          en: "Fast delivery service",
          zh: "配送速度快",
          ja: "配達が速い",
          it: "Servizio di consegna rapido",
          ru: "Быстрая доставка",
          vi: "Dịch vụ giao hàng nhanh",
          id: "Layanan pengantaran cepat",
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
    it: "App essenziali",
    ru: "Полезные приложения",
    vi: "Ứng dụng cần thiết",
    id: "Aplikasi penting",
  },
  openSite: {
    ko: "사이트 열기",
    en: "Open site",
    zh: "打开网站",
    ja: "サイトを開く",
    it: "Apri sito",
    ru: "Открыть сайт",
    vi: "Mở trang",
    id: "Buka situs",
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
