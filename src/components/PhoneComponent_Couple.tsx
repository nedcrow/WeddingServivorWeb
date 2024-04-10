import React from 'react';
import CallButton from './CallButton';

const Connect_Couple: React.FC = () => (
    <div id="contact-couple" className="d-flex justify-content-center">
    <div className="card text-primary border-0 mb-3" style={{ width: "36rem", minWidth:"580px"  }}>
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
);

export default Connect_Couple;