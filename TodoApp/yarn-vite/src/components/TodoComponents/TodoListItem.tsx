import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { InitialObject } from '../../modules/todoSlice';
import { useDispatch } from 'react-redux';
import { remove, toggle } from '../../modules/todoSlice';

interface Prop {
  todo: InitialObject;
}

const TodoListItem = ({ todo }: Prop) => {
  const dispatch = useDispatch();

  return (
    <li
      className={
        todo.checked
          ? 'sdt sdb my-2 flex items-center justify-between rounded-full border-2 border-pointColor px-4 opacity-20 transition-all duration-300 ease-in-out md:h-[50px] md:w-[280px] '
          : 'sdt sdb my-2 flex items-center justify-between rounded-full border-2 border-pointColor px-4 md:h-[50px] md:w-[280px]'
      }
      onClick={() => {
        dispatch(toggle(todo.id));
      }}
    >
      {todo.checked ? (
        <AiOutlineCheckCircle className="flex-shrink-0 text-2xl text-pointColor" />
      ) : (
        <AiOutlineCheckCircle className="flex-shrink-0 text-2xl text-slate-400" />
      )}
      <p className={todo.checked ? ' line-clamp-2 px-1 line-through' : 'line-clamp-2'}>
        {todo.text}
      </p>
      <MdDeleteForever
        className=" flex-shrink-0 text-2xl"
        onClick={() => {
          dispatch(remove(todo.id));
        }}
      />
    </li>
  );
};

export default TodoListItem;
