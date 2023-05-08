import { BsStarHalf } from 'react-icons/bs';
import Form from '../../utilComponent/Form';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import Dding from '../../utilComponent/Dding';

const DoneContainer = () => {
  const todo = useSelector((state: RootState) => state.todos);
  const doneCounter = todo.filter((todo) => todo.checked).length;

  return (
    <section className=" flex flex-col items-center justify-center rounded-2xl bg-pointColor px-[1.875rem]  py-20 text-slate-200 dark:text-darkColor md:h-[640px] md:w-[640px] md:rounded-none md:rounded-br-2xl md:rounded-tr-2xl">
      <Dding />
      <BsStarHalf className="flex-shrink-0 text-[80px]" />
      <div className=" mb-12 py-2 text-4xl font-extrabold">{doneCounter}</div>
      <Form />
    </section>
  );
};

export default DoneContainer;
