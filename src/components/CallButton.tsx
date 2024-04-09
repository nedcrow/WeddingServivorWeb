import PhoneIcon from "./PhoneIcon";

const CallButton: React.FC<{number: string}> = ({ number }) => {
    return (
      <a href={`tel:${number}`} className="call-button">
        <PhoneIcon/> 
      </a>
    );
  }

  export default CallButton;