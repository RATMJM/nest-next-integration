export default function TopNavigation() {
  // 펑션이름 앞글자는 반드시 대문자, // 이 틀은 타입스크리트 권고사항임!
  return (
    <nav className="h-[10%]">
      <div className="">
        <div className="flex flex-col w-full  justify-center items-center border rounded-b-xl bg-blue-400">
          <div className="mt-4">주소</div>
          <div>Search bar</div>
        </div>
      </div>
    </nav>
  );
}
