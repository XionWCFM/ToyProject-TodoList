import Children from '../type/children';

const BackGround = ({ children }: Children) => {
  return (
    <div className=" relative h-screen min-h-screen w-full bg-lightBackColor dark:bg-darkBackColor">
      {children}
    </div>
  );
};

export default BackGround;
