import React from "react";
import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = (props) => {
  return (
    <div className='d-flex align-items-center'>
      <p className='mx-2'>{props.children}</p>
      <TailSpin height='20' width='20' color='black' />
    </div>
  );
};

export default LoadingSpinner;
