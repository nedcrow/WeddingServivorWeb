import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import PhoneIcon from "../components/PhoneIcon";
import CallButton from "../components/CallButton";
import FoldingConnect from "../components/FoldingConnect";

const Home = () => {
  const unityContainerStyle = {
    width: "100%",
    maxWidth: "720px",
    aspectRatio: 1,
  };

  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.loader.js",
    dataUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.data.unityweb",
    frameworkUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.framework.js.unityweb",
    codeUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.wasm.unityweb",
  });

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
    <div className="d-flex flex-column justify-content-start">
      <div className="d-flex flex-row justify-content-center">
        <div className="rounded-3 shadow" style={{ width: unityContainerStyle.width, maxWidth: "720px" }}>
          <Unity className="rounded-top-3" unityProvider={unityProvider} style={unityContainerStyle} />
          <br />

          <img
            style={{ width: unityContainerStyle.width, maxWidth: "720px" }}
            src="WeddingServivorWeb/wedding_letter_inside.png"
          ></img>

          <div className="rounded-bottom-3">
            <div className="container">
              <br />

              <div className="d-flex justify-content-center">
                <h1>혼주 연락처</h1>
              </div>
              <FoldingConnect
                id="2"
                name="신랑측 혼주"
                value={
                  <div className="d-flex justify-content-around">
                    <p className="d-flex flex-column justify-content-center">
                      <h4>황인구</h4>
                      <CallButton number="01067528850" />
                    </p>
                    <p className="card-text">
                      <h4>김미숙</h4>
                      <CallButton number="01039938850" />
                    </p>
                  </div>
                }
              />
              <FoldingConnect
                id="3"
                name="신부측 혼주"
                value={
                  <p className="d-flex flex-row justify-content-around">
                    <p className="d-flex flex-column justify-content-center mb-0">
                      <h4>김점수</h4>
                    </p>
                    <CallButton number="01026946761" />
                  </p>
                }
              />
              <br />
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
                <h1>감사합니다. </h1>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-center"> design by harim. </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
      </div>
    </div>
  );
};

export default Home;
