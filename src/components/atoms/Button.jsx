/* eslint-disable react/prop-types */
const Button = ({ type }) => {
  return (
    <>
      <button className='border bg-sky-500 rounded-lg mt-4'>{type}</button>
    </>
  );
};

export default Button;
