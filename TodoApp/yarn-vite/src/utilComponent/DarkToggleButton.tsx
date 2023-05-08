import { BsSun, BsMoonStars } from 'react-icons/bs';
import useDarkMode, { useDark } from '../hooks/useDarkMode';

const DarkToggleButton = () => {
  const [dark, setDark]: useDark = useDarkMode();

  return (
    <button
      className="btn bg-pointColor text-slate-50 dark:text-darkColor"
      onClick={() => setDark()}
    >
      {dark ? <BsSun className=" toggle" /> : <BsMoonStars className=" toggle" />}
    </button>
  );
};

export default DarkToggleButton;
