import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import PhoneIcon from "../components/PhoneIcon";
import CallButton from "../components/CallButton";
import FoldingConnect from "../components/FoldingConnect";
import 피로연 from "../components/피로연";
import CopySVG from "../components/SVG/CopySVG";
import useCopyClipboard from "../custom/useCopyClipboard";
import WeddingHall from "../components/WeddingHall";
import WeddingContents from "../components/WeddingContents";

const Home = () => {
  const {copyToClipboard} = useCopyClipboard();

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

  const AccountNumber: React.FC<{id:string, name:string, value:React.JSX.Element}> = ({id, name, value}) => {
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
            <div className="accordion-body">{value}</div>
          </div>
        </div>
      </div>
    );
  }

  const AccountButton: React.FC<{name:string, account:string}> = ({name, account}) =>{
    return (
      <div className="d-flex flex-row justify-content-start">
        <p className="mb-0 mx-2">{`${name} ${account}`}</p>
        <button
          style={{
            background: "none",
            border: "none",
          }}
          onClick={() => copyToClipboard(`${account}`)}
        >
          <CopySVG width="24px" height="24px" />
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-start">
      <div className="d-flex flex-row justify-content-center">
        <div className="rounded-3 shadow" style={{ width: unityContainerStyle.width, maxWidth: "720px" }}>
          <Unity className="rounded-top-3" unityProvider={unityProvider} style={unityContainerStyle} />
          <br />
          <br />

          <h1 className="d-flex justify-content-center"><b>Wedding Day</b></h1>
          <WeddingContents/>
          <br />
          <br />

          <h1 className="d-flex justify-content-center"><b>Location</b></h1>
          <div className="d-flex justify-content-center">
            <WeddingHall />
          </div>

          <div className="rounded-bottom-3">
            <div className="container">
              <br />
              <br />

              <div className="d-flex justify-content-center">
                <h1><b>Connect</b></h1>
              </div>
              <FoldingConnect
                id="2"
                name="신랑 측 혼주 연락처"
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
                name="신부 측 혼주 연락처"
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
                <div style={{ width: "36rem" }}>
                  <피로연></피로연>
                </div>
              </div>
              <br />
              <br />
              <br />

              <div className="d-flex justify-content-center">
                <h1><b>Online Registry</b></h1>
              </div>
              <div className="d-flex justify-content-center">
                <div className="card border-primary mb-3" style={{ width: "36rem" }}>
                  <div className="card-header">
                    <b> 신랑 & 신부 </b>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column justify-content-around">
                      <AccountNumber
                        id="hr"
                        name="신랑 계좌 확인하기"
                        value={<AccountButton name="황하림" account="하나 428-910180-14107" />}
                      />
                      <AccountNumber
                        id="as"
                        name="신부 계좌 확인하기"
                        value={<AccountButton name="김안선" account="농협 352-1031-9834-53" />}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="card border-primary mb-3" style={{ width: "36rem" }}>
                  <div className="card-header">
                    <b> 신랑 측 혼주 </b>
                  </div>
                  <div className="card-body">
                    <AccountNumber id="ig" name="신랑 혼주 계좌 확인하기" value={<p>{"황인구 농협 어디어디"}</p>} />
                  </div>
                </div>
              </div>

              {/* <div className="d-flex justify-content-center">
                <div className="card border-primary mb-3" style={{ width: "36rem" }}>
                  <div className="card-header">
                    <b> 신부 측 혼주 </b>
                  </div>
                  <div className="card-body">
                    <AccountNumber id="js" name="신부 혼주 계좌 확인하기" value={<p>{"김점수 농협 어디어디"}</p>} />
                  </div>
                </div>
              </div> */}

              <br />
              <br />
              <div className="d-flex justify-content-center">
                <h5>감사합니다.</h5>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="d-flex justify-content-center"> designed by harim. </div>
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
