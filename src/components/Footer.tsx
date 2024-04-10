import React from 'react';

const Footer = () => {
  return (
    <footer className="footer fixed-bottom">
      <div className="" style={{ backgroundColor: "#fff" }}>
        <br />
        <div
          className="card rounded-5"
          style={{
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "#2b5cdd",
          }}
        >
          <div className="d-flex flex-row justify-content-center mt-1">
            <p className="h6 text-white">{"5월 25일 토요일 낮 12시 10분 SW 컨벤션"}</p>
          </div>
        </div>
        <br />
      </div>
    </footer>
  );
};

export default Footer;