import React, { useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import PhoneIcon from "../components/PhoneIcon";
import CallButton from "../components/CallButton";
import FoldingConnect from "../components/FoldingConnect";
import 피로연 from "../components/피로연";
import CopySVG from "../components/SVG/CopySVG";
import useCopyClipboard from "../custom/useCopyClipboard";
import WeddingHall from "../components/WeddingHall";
import WeddingContents from "../components/WeddingContents";
import AccountFolder from "../components/AccountFolder";

const Home = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
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

  const AccountButton: React.FC<{name:string, account:string}> = ({name, account}) =>{
    const onlyNumber= account.replace(/\D/g, '');
    return (
      <div className="d-flex flex-row justify-content-start">
        <div className="d-flex flex-column justify-content-center">
        <p className="mb-0 mx-1" style={{ fontSize: "13.2px"}}>{`${name} ${account}`}</p>
        </div>        
        <button
          style={{
            background: "none",
            border: "none",           
          }}
          onClick={() => {
            copyToClipboard(`${onlyNumber}`);
            setShowAlert(true);
            // alert("복사");
          }}
        >
          <CopySVG width="16px" height="16px" />
        </button>
      </div>
    );
  }

  const AccountAlert: React.FC = () => {
    return (
      <div
        className="alert alert-success alert-light position-fixed"
        role="alert"
        style={{
          zIndex: 999,
          left: "20px",
          bottom: "8%",
        }}
      >
        <div className="d-flex flex-row justify-content-start">
          <strong>계좌번호가 복사되었습니다. </strong>
          <div className="" style={{marginLeft:"20px"}}>
          <svg
            height="18px"
            width="18px"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 17.837 17.837"
          >
            <g>
              <path
                fill="#2b5cdd"
                d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
		c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
		L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"
              />
            </g>
          </svg>
          </div>
        </div>
      </div>
    );
  }

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showAlert]); 

  return (
    <div className="d-flex flex-column justify-content-start">
      <div className="d-flex flex-row justify-content-center">
        <div className="rounded-0" style={{ width: unityContainerStyle.width, maxWidth: "720px" }}>
          <Unity className="rounded-0" unityProvider={unityProvider} style={unityContainerStyle} />
          <br />
          <br />
          <br />

          <h1 className="d-flex justify-content-center">
            <b>Wedding Day</b>
          </h1>
          <WeddingContents />
          <br />
          <br />
          <br />

          <h1 className="d-flex justify-content-center">
            <b>Location</b>
          </h1>
          <div className="d-flex justify-content-center">
            <WeddingHall />
          </div>

          <div className="rounded-bottom-3">
            <div className="container">
              <br />
              <br />

              <div className="d-flex justify-content-center">
                <h1>
                  <b>Groom's Reception</b>
                </h1>
              </div>

              {/* <FoldingConnect
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
              <br /> */}

              <div className="d-flex justify-content-center">
                <div style={{ width: "36rem" }}>
                  <피로연></피로연>
                </div>
              </div>
              <FoldingConnect
                id="2"
                name="신랑 측 혼주 연락처"
                value={
                  <div className="d-flex justify-content-around">
                    <p className="d-flex flex-column justify-content-center">
                      <p className="d-flex flex-row justify-content-start">
                        <h4>황인구</h4>
                        <CallButton number="01067528850" />
                      </p>
                    </p>
                  </div>
                }
              />
              <br />
              <br />
              <br />

              <div className="d-flex justify-content-center">
                <h1>
                  <b>Online Registry</b>
                </h1>
              </div>
              <div className="d-flex justify-content-center">
                <div className="card border-primary text-black mb-3 border-0" style={{ width: "36rem" }}>
                  <div className="card-header">
                    <b> 신랑 & 신부 </b>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column justify-content-around">
                      <AccountFolder
                        id="hr"
                        name="신랑 계좌 확인하기"
                        value={<AccountButton name="황하림" account="하나 428-910180-14107" />}
                      />
                      <AccountFolder
                        id="as"
                        name="신부 계좌 확인하기"
                        value={<AccountButton name="김안선" account="농협 352-1031-9834-53" />}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="card border-primary text-black mb-3 border-0" style={{ width: "36rem" }}>
                  <div className="card-header">
                    <b> 신랑 측 혼주 </b>
                  </div>
                  <div className="card-body">
                    <AccountFolder
                      id="ig"
                      name="신랑 측 혼주 계좌 확인하기"
                      value={<AccountButton name="황인구" account="농협 407045-56-005398" />}
                    />
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
              {/* <div className="d-flex justify-content-center">
                <h5>감사합니다.</h5>
              </div> */}
              <div className="d-flex text-black justify-content-center font" style={{ fontSize: "10px" }}>
                {" "}
                DESIGNED BY HARIM{" "}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        {showAlert && <AccountAlert />}
      </div>
    </div>
  );
};

export default Home;
