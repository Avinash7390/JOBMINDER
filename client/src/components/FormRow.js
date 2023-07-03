import React from "react";
// Reuseable input
const FormRow = ({ type, name, value, handleChange, lableText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-lable">
        {lableText || name}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        
        className="form-input"
      />
    </div>
  );
};

export default FormRow;