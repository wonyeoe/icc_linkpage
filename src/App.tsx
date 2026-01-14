import SchoolLogo from "./assets/Emblem_T01.png";

type LinkItem = {
  id: string;
  label: string;
  href: string;
};

const links: LinkItem[] = [
  { id: "1", label: "학사일정", href: "https://www.inha.ac.kr/kr/1908/subview.do" },
  { id: "2", label: "필수 어플", href: "#" },
  { id: "3", label: "장학금", href: "#" },
  { id: "4", label: "동아리", href: "#" },
  { id: "5", label: "진로 가이드", href: "#" },
  { id: "6", label: "국가별 유학생회", href: "#" },
];

function LinkButton({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.href}
      className="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-4 text-white"
    >
      <span className="text-[15px] font-semibold">{item.label}</span>
    </a>

  );
}


export default function App() {
  return (
    <div className="min-h-dvh bg-white font-sans">
      <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 pb-16 pt-16">
        {/* 상단 로고/아이콘 */}
        <div className="mb-6 flex h-25 w-25">
          <img
            src={SchoolLogo}
            alt="학교 로고"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 타이틀 */}
        <h1 className="text-xl font-extrabold tracking-tight text-black">인하대학교</h1>
        <p className="mt-2 text-sm text-gray-500">
          필수 정보 바로가기
        </p>

        {/* 링크 버튼 리스트 */}
        <div className="mt-8 flex w-full flex-col gap-4">
          {links.map((item) => (
            <LinkButton key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
