import React from "react"

const FoldingConnect:React.FC<{id: string, name:string, value:React.JSX.Element}> = ({id, name, value}) => {
    return (
<div className="d-flex justify-content-around">
            <div className="accordion" id={`accordion-${id}`} style={{ width: "36rem", minWidth: "120px" }}>
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
                  <div className="accordion-body">
                    {value}
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default FoldingConnect;