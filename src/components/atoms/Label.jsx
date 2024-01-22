/* eslint-disable react/prop-types */
const Label = ({ type, name }) => {
  return (
    <>
      <label htmlFor={type}>{name}</label>
    </>
  );
};

export default Label;
