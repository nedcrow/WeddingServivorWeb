import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Router2 = () => {
  const unityContainerStyle = {
    width: "800px", // 너비 조절
    height: "600px", // 높이 조절
    border: "1px solid black", // 필요한 경우 테두리 추가
    // 추가적인 스타일 정의가 가능합니다.
  };

  const { unityProvider } = useUnityContext({
    loaderUrl: "/WeddingServivorWeb/unity-webgl/Build/Build.loader.js",
    dataUrl: "WeddingServivorWeb/unity-webgl/Build/Build.data.unityweb",
    frameworkUrl: "WeddingServivorWeb/unity-webgl/Build/Build.framework.js.unityweb",
    codeUrl: "WeddingServivorWeb/unity-webgl/Build/Build.wasm.unityweb",
  });

  // const { unityProvider } = useUnityContext({
  //     loaderUrl: "/unity-webgl/Build/Build.loader.js",
  //     dataUrl: "/unity-webgl/Build/Build.data",
  //     frameworkUrl: "/unity-webgl/Build/Build.framework.js",
  //     codeUrl: "/unity-webgl/Build/Build.wasm",
  //   });

  return (
    <div>
      <div>Wedding Survivor</div>
      <Unity unityProvider={unityProvider} style={unityContainerStyle}/>
    </div>
  );
};

export default Router2;
