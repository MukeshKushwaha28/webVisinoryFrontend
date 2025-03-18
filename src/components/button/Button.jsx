import React from "react";

const Button = ({ text }) => {
  return (
    <button className="border border-black rounded-full w-auto text-black p-2 px-4">
      <ul className="list-disc list-inside text-black">
        <li>{text}</li>
      </ul>
    </button>
  );
};

export default Button;
