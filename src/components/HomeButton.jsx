import { useState } from "react"; //added so we can access React's useState hook
import "../App.css/";

function HomeButton({ onClick, className, disabled }) {
  return (
    <>
      <button
        type="button"
        disabled={disabled}
        className={"button-home " + className}
        onClick={onClick}
      >
        Home
      </button>
    </>
  );
}

export default HomeButton;
