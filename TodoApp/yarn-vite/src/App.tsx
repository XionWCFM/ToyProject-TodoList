import './App.css';
import AllContainer from './components/AllContainer';
import BackGround from './components/BackGround';
import DarkToggleButton from './utilComponent/DarkToggleButton';
import DoneContainer from './components/DoneComponents/DoneContainer';
import TodoListContainer from './components/TodoComponents/TodoListContainer';

const App = () => {
  return (
    <>
      <BackGround>
        <AllContainer>
          <>
            <DarkToggleButton />
            <TodoListContainer />
            <DoneContainer />
          </>
        </AllContainer>
      </BackGround>
    </>
  );
};

export default App;
