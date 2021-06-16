import React from "react";
import Card from "../UI/Card";
import FooterIcon from "../Common/FooterIcon";

function ContactContent() {
  return (
    <Card className="card-center">
      <div className="card-top">
        <h1 className="card-title">CONTACT</h1>
        <p className="card-top-p">
          You can reach me out from any media list below :)
        </p>
      </div>
      <div className="card-bottom">
        <p className="card-botttom-p">
          <FooterIcon />
        </p>
      </div>
    </Card>
  );
}

export default ContactContent;
