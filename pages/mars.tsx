import tw from "twin.macro";
import { Label } from "../components/Label";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import LinkIcon from "../components/LinkIcon";
import Growing from "../components/Growing";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ProjectWrapper } from "../components/ProjectWrapper";
import InfoList from "../components/InfoList";

const Mars = () => {
  return (
    <ProjectWrapper>
      <div tw="max-w-3xl mx-auto">
        <h1 tw="w-full font-bold mb-5 text-3xl flex justify-between sm:(text-2xl flex justify-center)">
          MARS &#40;실시간 장비 모니터링 시스템&#41;
        </h1>
        <div tw="my-12 sm:(px-3 text-xs my-10)">
          <InfoList>
            <li tw="font-bold mb-3" className="infoTitle">
              링크
            </li>
            <li tw="flex">
              <LinkIcon
                txt="git"
                url="https://github.com/jihyun-jeon/Mars-monitoring-system"
              />

              <LinkIcon
                txt="개발노트"
                url="https://velog.io/@jhplus13/MARS-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Management-Automated-Reporting-System"
              />
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-8" className="infoTitle">
              서비스 소개
            </li>
            <li>
              이 서비스는 공사현장 관리자를 위한
              <span tw="font-semibold pl-1 text-mainOrange">
                실시간 장비 모니터링 시스템
              </span>
              이며,
              <br />
              <span tw="font-semibold pl-1 text-mainOrange">
                기획부터 앱 제작까지
              </span>
              모두 주도적으로 담당하였습니다.
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              사용 스택
            </li>
            <li>
              <Label txt="React" color="blue" />
              <Label txt="Typescript" color="green" />
              <Label txt="MobX" color="rosy" />
              <Label txt="Tailwind" color="violet" />
              <Label txt="Javascript" color="yellow" />
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              기간
            </li>
            <li>2022. 07. 18 ~ 2022. 08. 11 &#40;4주&#41;</li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              팀 구성
            </li>
            <li>프론트엔드 2명, 백엔드 2명</li>
          </InfoList>
        </div>
        <Carousel CarouselData={CarouselData} />
        <div tw="my-20 sm:(px-3 text-xs)">
          <div tw="max-w-[660px] mx-auto">
            <h1 tw="py-8 text-xl font-bold">개발 내용</h1>

            <Accordion
              CarouselTitle={
                "1. Google Maps Javascript API 연동 장비 현황도 구현"
              }
            >
              <div>
                <div tw="mb-6">
                  이 서비스는 해외 공사 현장에서도 사용될 것을 고려했기 때문에,
                  <br /> 전 세계의 지도를 제공하는 Google Maps Javascript API를
                  사용했습니다.
                </div>

                <div tw="mb-6">
                  <p tw="font-bold">📍 도면을 지도 배경으로 커스텀</p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    실제 공사장 도면을 지도 배경 이미지로 활용하여 장비의 위치를
                    파악할 수 있도록 하였습니다.
                  </p>
                </div>

                <div tw="mb-6">
                  <p tw="font-bold"> 📍 Marker를 이용한 장비의 가동상황 표시</p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    장비별 아이콘을 Marker로 표시하고, 장비 가동 상태에 따라
                    아이콘 색상이 변경됩니다.
                  </p>
                </div>
                <div tw="mb-6">
                  <p tw="font-bold">
                    📍 Cluster와 Overlay를 활용한 공사현장 표시
                  </p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    지도 축소 시 Cluster로 마커가 하나로 모이고, 마커 클릭 시
                    Overlay에 장비 이름이 표시되어 <br />
                    관리자가 공사현장을 한눈에 파악할 수 있도록 하였습니다.
                  </p>
                </div>
              </div>
            </Accordion>
            <Accordion CarouselTitle={"2. Context API를 이용한 Toast 메시지"}>
              <div tw="mb-6">
                Context API를 이용하여 toast 메시지를 전역으로 두어, 다른 팀원이
                구현하는 페이지에서도 같이 사용할 수 있도록 하였습니다.
              </div>
            </Accordion>
            <Accordion CarouselTitle={"3. 재사용 가능한 컴포넌트 구상"}>
              <div tw="mb-6">
                <div>
                  반복되는 input box와 select box를 공통 컴포넌트로 분리하여
                  재사용하였습니다. <br />
                  <br />
                  또한 요소마다 조금씩 다른 style 처리를 해야 하는 경우가
                  있었는데
                  <br />
                  이는 props로 독립적인 style 값을 주어 해결하였습니다.
                  <br />
                  <br />이 결과 한 컴포넌트를 사용해도 상황에 맞는 별도의 UI를
                  그릴 수 있었습니다.
                </div>
                <Image
                  src={`${process.env.BASE_URL}/imgs/components.png`}
                  tw="w-full h-96 mt-2 sm:h-56"
                  alt="componentImg"
                  width={1750}
                  height={980}
                />
              </div>
            </Accordion>
          </div>

          <div tw="max-w-[660px] mx-auto my-10">
            <h1 tw="py-8 text-xl font-bold">성장 포인트</h1>

            <Growing GrowingData={GrowingData} />
          </div>
          <div tw="max-w-[660px] mx-auto my-10">
            <h1 tw="pt-8 pb-6 text-xl font-bold">동료 평가</h1>
            <p tw="py-2">
              같은 프론트엔드 동료의 저에 대한 평가입니다. &#40;출처 :동료
              블로그 &#41;
            </p>
            <Zoom>
              <Image
                src={`${process.env.BASE_URL}/imgs/harry.png`}
                alt="musma동료평가"
                width={1620}
                height={770}
              />
            </Zoom>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Mars;

const CarouselData = [
  { title: "home 대쉬보드", url: "https://www.youtube.com/embed/sI7kB4cCKz0" },
  {
    title: "장비 디테일 페이지",
    url: "https://www.youtube.com/embed/qcmL_gua0Y0",
  },
  {
    title: "디바이스 디테일 페이지",
    url: "https://www.youtube.com/embed/_-b6ophYQ9s",
  },
];

const GrowingData = [
  [
    "주도적으로 진행한 기획",
    "구현해야 할 기능 명세만 텍스트로 주어진 상태에서 기획부터 앱 제작까지 하였습니다.\n<br/>도메인이 낯설어 서비스 이해를 위해 <b>적극적으로 질문</b>을 하였고, 사용자가 원하는 니즈가 무엇인지까지 끊임없이 생각하였습니다.\n<br/>이 경험을 통해 단순 기능 구현이 아닌 <b>서비스의 가치를 파악하고 그 가치를 코드로 구현 해보는 경험</b>을 하였고, 코딩은 어떠한 가치를 창출하기 위한 수단이라는 생각이 들었습니다.",
  ],
  [
    "원만한 대화를 통한\n의견 조율",
    "MobX를 사용하는데 있어서 다른 팀원과 각자 추구하는 방식이 달랐습니다.\n<br/>때문에 각자가 선호하는 방법을 서로에게 설명하는 시간을 가졌고 또한 구글링을 통해 두 방식은 테스트 할 때에 차이를 보인다는 것을 알아냈습니다.\n이 프로젝트는 테스트는 진행하지 않았고 다른 팀원이 상태 관리 셋팅을 담당하기로 했기 때문에 팀원을 믿고 팀원의 결정대로 방식을 결정하였습니다.\n<br/>저는 상대와 의견 충돌이 있을 때 <b>동료의 의견이 옳을 수 있다는 열린 마음</b>을 갖고\n동료와의 <b>충분한 상의</b>를 통해 원만히 해결해 나갈 것입니다.",
  ],
  [
    "에러 해결기\n(비동기 처리 순서 보장)",
    "수정된 데이터를 put요청 후 다시 get요청을 하여 최신 데이터로 store값을 갱신해줘야 했습니다. \n<br/>그러나 store 업데이트 후 자동으로 리렌더링이 안되고 새로고침을 해야지만 업데이트 된 내용이 반영이 되는 현상이 발생하였습니다.\n 여러 시도 끝에 api 호출하는 코드에서 응답 값을 콘솔로 찍어보니 put요청과 get요청의 순서가 보장되지 않는 것을 알게 되었습니다. \n<br/>때문에 <b>async구문을 사용</b>하여 두 api호출의 순서를 보장하도록 하였고,\n 나아가 fetch의 then메서드에서 <b>중첩 fetch</b>를 반환하는 식으로 비동기 처리의 순서를 보장할 수도 있다는 것까지 알게 되었습니다.",
  ],
];
