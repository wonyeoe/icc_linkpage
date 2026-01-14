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
      className="group relative flex w-full items-center justify-between rounded-2xl bg-blue-600 px-5 py-4 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="min-w-0 truncate text-[15px] font-semibold">
          {item.label}
        </span>
      </div>

      <div className="ml-4 flex items-center gap-2 text-white/90">
        <span className="text-xl leading-none">⋯</span>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="mx-auto flex w-full max-w-md flex-col items-center px-6 pb-16 pt-16">
        {/* 상단 로고/아이콘 */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
          <span className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-white" />
        </div>

        {/* 타이틀 */}
        <h1 className="text-xl font-extrabold tracking-tight text-black">인하대학교</h1>
        <p className="mt-2 text-sm text-gray-500">
          금융의 모든 것, 토스에서 간편하게
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
