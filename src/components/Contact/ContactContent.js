import React, { useEffect } from "react";
import Card from "../UI/Card";
import FooterIcon from "../Common/FooterIcon";

function ContactContent() {
  const email = "kuoyen5@gmail.com";

  return (
    <Card className="card-center">
      <div className="card-top">
        <h1 className="card-title">CONTACT</h1>
        <p className="card-top-p">
          You can reach me out from any media list below or email:)
        </p>
      </div>
      <div className="card-bottom">
        <div className="card-botttom-p">
          <FooterIcon />
        </div>
      </div>
    </Card>
  );
}

export default ContactContent;
