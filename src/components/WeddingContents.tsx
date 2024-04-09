const WeddingContents: React.FC = () => (
  <div className="container">
    <br />
    <div className="d-flex flex-column justify-content-center">
      <p className="h6 text-center mb-4">서로에게 연인이라는 이름을 지어준 후</p>
      <p className="h6 text-center mb-4">함께 열일곱 번의 봄을 맞았습니다.</p>
      <p className="h6 text-center mb-4">앞으로의 길도 무던하고 담담하게,</p>
      <p className="h6 text-center mb-4">그렇지만 따뜻하고 든든하게</p>
      <p className="h6 text-center">함께하고자 합니다.</p>
    </div>
    <br/>
    <br/>

    <table className="table table-borderless">
              <tbody>
                <tr>
                  <th  scope="row">{""}</th>
                  <td ><b>{"황 인 구"}</b></td>
                  <td rowSpan={2}  style={{verticalAlign:"middle"}}>{"의 장남"}</td>
                  <td rowSpan={2}  style={{verticalAlign:"middle"}}><b>{"하림"}</b></td>
                  <td rowSpan={2}  style={{verticalAlign:"middle"}}><img src={
                    process.env.NODE_ENV === "development" ? 
                  "./WeddingServivorWeb/me.png" : 
                  "me.png"
                  } 
                  style={{transform:"scaleX(-1)"}}/></td>
                </tr>
                <tr>
                  <td >{""}</td>
                  <td ><b>{"김 미 숙"}</b></td>
                </tr>
                <tr>
                  <th  scope="row">{"故"}</th>
                  <td ><b>{"김 신 호"}</b></td>
                  <td rowSpan={2}  style={{verticalAlign:"middle"}}>{"의 장녀"}</td>
                  <td rowSpan={2}  style={{verticalAlign:"middle"}}><b>{"안선"}</b></td>
                  <td rowSpan={2}  style={{verticalAlign:"middle"}}><img src={
                    process.env.NODE_ENV === "development" ? 
                  "./WeddingServivorWeb/her.png" : 
                  "her.png"
                  } 
                  style={{transform:"scaleX(-1)"}}/></td>
                </tr>
                <tr>
                  <td >{""}</td>
                  <td ><b>{"김 점 수"}</b></td>
                </tr>
              </tbody>
            </table>
  </div>
);

export default WeddingContents;