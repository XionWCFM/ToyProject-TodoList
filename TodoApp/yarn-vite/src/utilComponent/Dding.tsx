import ddingUn from '../utillity/MyungUnArray';
import { useEffect, useState } from 'react';

const Dding = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeId = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = Math.floor(Math.random() * ddingUn.length);

        return newIndex === prevIndex ? (newIndex + 1) % ddingUn.length : newIndex;
      });
    }, 5000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <p className=" mb-4 py-4 text-center text-lg font-semibold text-slate-200 dark:text-darkColor ">
      {ddingUn[index]}
    </p>
  );
};

export default Dding;
