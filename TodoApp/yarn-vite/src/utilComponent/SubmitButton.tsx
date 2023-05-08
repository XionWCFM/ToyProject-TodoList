import { AiOutlinePlus } from 'react-icons/ai';
import ClassName from '../type/className';

const SubmitButton = ({ className }: ClassName) => {
  return (
    <button className={className}>
      <AiOutlinePlus className=" text-6xl" />
    </button>
  );
};

export default SubmitButton;
