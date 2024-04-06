import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import LoadingSVG from "../components/LoadingSVG";
import PhoneIcon from "../components/PhoneIcon";

const Home = () => {
  const unityContainerStyle = {
    width: "720px", // 너비 조절
    height: "720px", // 높이 조절
    // border: "1px solid black",
  };

  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.loader.js",
    dataUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.data.unityweb",
    frameworkUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.framework.js.unityweb",
    codeUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.wasm.unityweb",
  });



  const CallButton: React.FC<{number:string}> = (number) => {
    return (
      <a href={`tel:${number}`}className="call-button">
        <PhoneIcon/> 
      </a>
    );
  }

  const AccountNumber: React.FC<{id:string, name:string, account:string}> = ({id, name, account}) => {
    return (
      <div className="accordion" id={`accordion-${id}`}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading-${id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${id}`}
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {name}
            </button>
          </h2>
          <div
            id={`collapse-${id}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${id}`}
            data-bs-parent={`#accordion-${id}`}
          >
            <div className="accordion-body">{account}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: unityContainerStyle.width }}>
        <div className="d-flex flex-column justify-content-start">
          <h1>5월</h1>
          <br />
          <h1> 25일</h1>
        </div>
        <br />

        <Unity unityProvider={unityProvider} style={unityContainerStyle} />
        <br />

        <div className="contents">
          <div className="d-flex justify-content-end">
            <h3>
              <p className="name">황하림 / 김안선</p>
            </h3>
          </div>
          <br />

          <div className="d-flex flex-column justify-content-end">
            <h4 className="d-flex justify-content-end">
              <p className="name">토요일 낮 12시 10분</p>
            </h4>
            <h4 className="d-flex justify-content-end">
              <p className="name">시즌빌딩 11층 SW컨벤션센터</p>
            </h4>
          </div>
          <br />

          <hr />

          <br />

          <div className="d-flex flex-column justify-content-center">
            <p className="h5 text-center mb-4">서로에게 연인이라는 이름을 지어준 후</p>
            <p className="h5 text-center mb-4">함께 열일곱 번의 봄을 맞았습니다.</p>
            <p className="h5 text-center mb-4">앞으로의 길도 무던하고 담담하게,</p>
            <p className="h5 text-center mb-4">그렇지만 따뜻하고 든든하게</p>
            <p className="h5 text-center">함께하고자 합니다.</p>
          </div>
          <br />
          <br />

          <div className="d-flex justify-content-center">
            <div className="card text-primary border-primary  mb-3" style={{ width: "36rem" }}>
              <div className="card-header d-flex justify-content-around">
                <b>신랑</b> <b>신부</b>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-around">
                  <p className="d-flex flex-column justify-content-center">
                    <h4>황하림</h4>
                    <br></br>
                    <CallButton number="01074498426" />
                    <p>연락하기</p>
                  </p>
                  <p className="card-text">
                    <h4>김안선</h4>
                    <br></br>
                    <CallButton number="01030046761" />
                    <p>연락하기</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="d-flex justify-content-center">
            <h5 className="text-primary">- 혼주 -</h5>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-around">
              <div className="card text-primary border-primary  mb-3" style={{ width: "18rem" }}>
                <div className="card-header d-flex justify-content-around">
                  <b>신랑측</b>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-around">
                    <p className="d-flex flex-column justify-content-center">
                      <h4>황인구</h4>
                      <br></br>
                      <CallButton number="01067528850" />
                      <p>연락하기</p>
                    </p>
                    <p className="card-text">
                      <h4>김미숙</h4>
                      <br></br>
                      <CallButton number="01039938850" />
                      <p>연락하기</p>
                    </p>
                  </div>
                </div>
              </div>

              <div></div>

              <div className="card text-primary border-primary  mb-3" style={{ width: "18rem" }}>
                <div className="card-header d-flex justify-content-around">
                  <b>신부측</b>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-around">
                    <p className="d-flex flex-column justify-content-center">
                      <h4>김점수</h4>
                      <br></br>
                      <CallButton number="01026946761" />
                      <p>연락하기</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="list-group d-flex justify-content-center">
            <h1 className="d-flex justify-content-center">오시는 길</h1>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
              <div className="d-flex w-100 justify-content-between">
                <h2>SW컨벤션</h2>
              </div>
              <p className="mb-1">서울 종로구 지봉로 19 시즌빌딩 11층</p>
              <small>Tel. 02-3673-5000</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <img width={"680px"} src="./WeddingServivorWeb/map01.png"></img>
            </a>
            <a className="list-group-item list-group-item-dark">
              <div className="d-flex justify-content-around">
                <a href="https://map.naver.com/p/entry/place/11540622?c=14.02,0,0,0,dh">
                  <img
                    width={64}
                    src="https://play-lh.googleusercontent.com/BaWUhtRONqb2Tt0ESjnaEH9KiaAUnOlFJqGzGUYN6oPsEEpZhPwQeHZhuGcM1Y8g1Io"
                  ></img>
                </a>
                <a href="https://place.map.kakao.com/m/7918739">
                  <img
                    width={64}
                    src="data:image/png;base64,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"
                  ></img>
                </a>
                <a href="https://www.google.co.kr/maps/place/SW%EC%BB%A8%EB%B2%A4%EC%85%98%EC%84%BC%ED%84%B0/data=!4m7!3m6!1s0x357ca33764b41d69:0x2c3cf1ab4d71e230!4b1!8m2!3d37.5716999!4d127.0151853!16s%2Fg%2F1q5bsxt_1?hl=ko&entry=ttu">
                  <img
                    width={64}
                    src="data:image/png;base64,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"
                  ></img>
                </a>
              </div>
            </a>
          </div>

          <br />

          <br />
          <div>지하철 및 주차안내</div>

          <br />
          <br />

          <div className="accordion" id={`accordionMap`}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`headingMap`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseMap`}
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  신랑측 피로연 약도
                </button>
              </h2>
              <div
                id={`collapseMap`}
                className="accordion-collapse collapse"
                aria-labelledby={`headingMap`}
                data-bs-parent={`#accordionMap`}
              >
                <div className="accordion-body">
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                    <div className="d-flex w-100 justify-content-between">
                      <h2>지전뷔페</h2>
                    </div>
                    <p className="mb-1">충북 영동군 영동읍 중앙로 22-1</p>
                    <small>Tel. 043-744-7333</small>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <img width={"680px"} src="./WeddingServivorWeb/map02.png"></img>
                  </a>
                  <a className="list-group-item list-group-item-dark">
                    <div className="d-flex justify-content-around">
                      <a href="https://map.naver.com/p/search/%EC%A7%80%EC%A0%84%EB%B7%94%ED%8E%98/place/17738419?c=16.93,0,0,0,dh&isCorrectAnswer=true">
                        <img
                          width={64}
                          src="https://play-lh.googleusercontent.com/BaWUhtRONqb2Tt0ESjnaEH9KiaAUnOlFJqGzGUYN6oPsEEpZhPwQeHZhuGcM1Y8g1Io"
                        ></img>
                      </a>
                      <a href="https://m.map.kakao.com/actions/searchView?q=%EC%A7%80%EC%A0%84%EB%B7%94%ED%8E%98&wxEnc=MNSSUM&wyEnc=QNLMNRN&lvl=4#!/8596851/map/place">
                        <img
                          width={64}
                          src="data:image/png;base64,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"
                        ></img>
                      </a>
                      <a href="https://www.google.co.kr/maps/place/%EC%A7%80%EC%A0%84%EB%B6%80%ED%8E%98/data=!3m1!4b1!4m6!3m5!1s0x35656e65f6b1bb03:0x91c508beef32fda6!8m2!3d36.1743271!4d127.7765869!16s%2Fg%2F1wj_r3vz?hl=ko&entry=ttu">
                        <img
                          width={64}
                          src="data:image/png;base64,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"
                        ></img>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <hr></hr>
          <br />
          <br />

          <div className="d-flex justify-content-center">
            <h1> 마음 전하는 곳 </h1>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card border-primary mb-3" style={{ width: "36rem" }}>
              <div className="card-header">
                <b> 신랑 & 신부 </b>
              </div>
              <div className="card-body">
                <div className="d-flex flex-column justify-content-around">
                  <AccountNumber id="hr" name="신랑 계좌 확인하기" account="황하림 농협 어디어디" />
                  <AccountNumber id="as" name="신부 계좌 확인하기" account="김안선 농협 어디어디" />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="card border-primary mb-3" style={{ width: "36rem" }}>
              <div className="card-header">
                <b> 신랑 혼주측 </b>
              </div>
              <div className="card-body">
                <AccountNumber id="ig" name="신랑 혼주 계좌 확인하기" account="황인구 농협 어디어디" />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="card border-primary mb-3" style={{ width: "36rem" }}>
              <div className="card-header">
                <b> 신부 혼주측 </b>
              </div>
              <div className="card-body">
                <AccountNumber id="js" name="신부 혼주 계좌 확인하기" account="김점수 농협 어디어디" />
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="d-flex justify-content-center">
            {" "}
            <h1>감사합니다. </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center"> design by harim. </div>
        </div>
      </div>
      {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 900,
          }}
        >
          <LoadingSVG />
        </div> */}
    </div>
  );
};

export default Home;
