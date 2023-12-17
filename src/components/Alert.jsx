import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-16 left-0 right-0 flex items-center justify-center gap-2">
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-green-800"
        } p-2 leading-none rounded-full text-indigo-50 flex lg:inline-flex items-center text-xs`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-green-500"
          } px-2 py-1 flex rounded-full uppercase font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
