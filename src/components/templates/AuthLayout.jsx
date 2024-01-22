/* eslint-disable react/prop-types */

const AuthLayout = ({ type, formComponent: FormComponent }) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen text-white'>
        <div className='w-full max-w-xs'>
          <h1 className='text-2xl text-sky-500'>{type}</h1>
          <p className='mb-4'>Welcome Please Enter Your Credentials</p>
          {FormComponent && <FormComponent />}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
