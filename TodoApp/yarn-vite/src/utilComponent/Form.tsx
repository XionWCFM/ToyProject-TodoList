import SubmitButton from './SubmitButton';
import { useDispatch } from 'react-redux';
import { InitialObject, insert } from '../modules/todoSlice';
import { FormEvent, useRef } from 'react';

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(0);
  const dispatch = useDispatch();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoObj: InitialObject = {
      id: `todo${nextId.current}`,
      text: inputRef.current?.value,
      checked: false,
    };
    if (inputRef.current) inputRef.current.value = '';
    dispatch(insert(todoObj));
    nextId.current += 1;
  };

  return (
    <form action="" className=" flex flex-col items-center justify-center" onSubmit={submitHandler}>
      <input
        type="text"
        className=" text-md h-[50px] w-[200px] rounded-full border-2 border-pointColor px-6 text-center text-pointColor transition-all duration-100 dark:bg-darkColor md:h-[110px] md:w-[500px] md:text-3xl"
        placeholder="할일을 입력하세요"
        ref={inputRef}
        required
      />

      <SubmitButton className=" btn mt-16 bg-slate-50 text-pointColor opacity-80 dark:bg-darkColor dark:opacity-100" />
    </form>
  );
};

export default Form;
