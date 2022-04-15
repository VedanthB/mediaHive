import React from "react";

const Input = ({ label, value, onChange, errorMessage, ...rest }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-outlined input-outlined-amber text-black"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label
        style={{ backgroundColor: "white" }}
        className="input-label text-black"
      >
        {label}
      </label>

      <small className="error text-red-500 text-sm"> {errorMessage} </small>
    </div>
  );
};

export default Input;
