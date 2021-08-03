import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import FooterIcon from "../Common/FooterIcon";

function ContactContent() {
  const emailArr = [
    "K",
    "u",
    "o",
    "y",
    "e",
    "n",
    "5",
    "@",
    "g",
    "m",
    "a",
    "i",
    "l",
    ".",
    "c",
    "o",
    "m",
  ];
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      if (!reverse) {
        setEmail(email + emailArr[count]);
        setCount(count + 1);
        if (count >= 16) {
          setReverse(true);
        }
      } else {
        setEmail(email.slice(0, -1));
        setCount(count - 1);
        if (count <= 1) {
          setReverse(false);
        }
      }
    }, 200);
    return () => clearInterval(interval);
  }, [email, count, reverse]);

  return (
    <Card className="card-center">
      <div className="card-top">
        <h1 className="card-title">CONTACT</h1>
        <p className="card-top-p">
          You can reach me out from any media list below or email:)
        </p>
        <p>{email}</p>
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
