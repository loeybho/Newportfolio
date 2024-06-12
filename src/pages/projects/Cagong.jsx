import { Link } from "react-router-dom";
import cagong from "@assets/01_cagong.png";

export default function Cagong() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-[600] font-NanumSquareNeo ">
      <div className=" max-w-screen-xl mx-auto gap-4 grid grid-cols-2 sm:flex">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-lg font-bold">
            <Link to="/work/#contrib-list">
              <img src="" alt="" />
              Byeol's Projects
            </Link>
          </h3>

          {/* <ul className="pagelist mt-4 ">
            <li className="current mb-2 underline">
              <Link to="/work/spotify/">개발일지</Link>
            </li>
            <li className="mb-2 underline">
              <Link to="/work/figma/">구현의도</Link>
            </li>
          </ul> */}
        </div>
        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2.2rem] font-extrabold mb-4">카공여지도</h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem] ">
              2024.03.28 - 2024.04.25
            </p>
          </div>
          <div className="p-10">
            <img src={cagong} className="w-1/2" />
          </div>

          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            카공여지도는 공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.
            멋쟁이사자처럼 프론트엔드 스쿨 수업에서 팀을 구성해 기획, 디자인,
            프론드엔드 개발까지 완성했습니다.
          </p>
          <ul className="pagelist mt-4 text-[1.4rem] flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2 ">
              <Link to="https://cagongmap.netlify.app/" target="_blank">
                배포 URL
              </Link>
            </li>
            <li className="mb-2 ">
              <Link
                to="https://github.com/loeybho/Cagong/tree/main"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>

          <div>
            <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
              이런 기능을 구현했어요 (기여도 100%) 👩‍💻
            </h2>

            <ul className="">
              <li className="text-[1.4rem] text-gray-700 mb-10 leading-[2.6rem]">
                <h3 className="font-extrabold">홈 페이지</h3>
                <img src="" alt="카공여지도 설명" className="my-4" />
                <ul className="ml-7 list-disc">
                  <li>
                    <p className="">상단 광고이미지를 Swiper로 렌더링</p>
                  </li>
                </ul>
              </li>
              <li className="text-[1.4rem] text-gray-700 mb-10 leading-[2.6rem]">
                <h3 className="font-extrabold">카페 리스트</h3>
                <img src="" alt="카페 리스트와 무한 스크롤" className="my-4" />
                <ul className="ml-7 list-disc">
                  <li>
                    <p className="">
                      React Query를 사용하여 데이터 베이스에 저장된 카페 리스트
                      렌더링.
                    </p>
                  </li>
                  <li>
                    <p className="">
                      무한 스크롤로 데이터를 6개씩 불러와 로딩 속도 개선.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="text-[1.4rem] text-gray-700 mb-10 leading-[2.6rem]">
                <h3 className="font-extrabold">북마크</h3>
                <img src="" alt="북마크 기능" className="my-4" />
                <ul className="ml-7 list-disc">
                  <li>
                    <p className="">
                      특정 유저가 저장한 카페의 동일한 순서가 담긴 id 값을 추가,
                      제거할 수 있는 기능 구현.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="text-[1.4rem] text-gray-700 mb-10 leading-[2.6rem]">
                <h3 className="font-extrabold">리뷰 리스트</h3>
                <img src="" alt="리뷰 리스트" className="my-4" />
                <ul className="ml-7 list-disc">
                  <li>
                    <p className="">저장된 리뷰 리스트 소환</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}