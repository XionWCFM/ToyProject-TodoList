import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import TodoListItem from './TodoListItem';
const TodoListContainer = () => {
  const todo = useSelector((state: RootState) => state.todos);

  return (
    <section className=" flex flex-col items-center rounded-2xl bg-slate-200 text-darkColor dark:bg-darkColor dark:text-slate-300  md:ml-3 md:h-[640px] md:w-[360px] md:rounded-none md:rounded-bl-2xl md:rounded-tl-2xl ">
      <h2 className=" py-6 text-2xl font-bold text-pointColor md:py-12 md:text-4xl">TODOLIST</h2>
      <ul className=" flex-col overflow-y-auto md:h-[410px] md:w-[300px]">
        {todo.map((todo) => (
          <TodoListItem todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoListContainer;
