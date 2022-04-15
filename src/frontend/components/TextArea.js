import React from "react";

const TextArea = ({ errorMessage, label, value, onChange, ...rest }) => {
  return (
    <div className="input-container text-black">
      <textarea
        type="text"
        className="input-outlined input-outlined-amber h-20 text-black"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label
        style={{ backgroundColor: "white" }}
        htmlDor="email"
        className="input-label text-black"
      >
        {label}
      </label>

      <small className="error text-red-500 text-sm"> {errorMessage} </small>
    </div>
  );
};

export default TextArea;
