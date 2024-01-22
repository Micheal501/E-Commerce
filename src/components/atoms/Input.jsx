/* eslint-disable react/prop-types */
const Input = ({ type, name }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className='border border-black'
      />
    </>
  );
};

export default Input;
