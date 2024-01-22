/* eslint-disable react/prop-types */
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormInput = ({ type, name }) => {
  return (
    <>
      <Label
        type={type}
        name={name}
      />
      <Input
        type={type}
        name={name}
      />
    </>
  );
};

export default FormInput;
