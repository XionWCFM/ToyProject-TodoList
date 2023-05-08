import Children from '../type/children';

const AllContainer = ({ children }: Children) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <main className="flex flex-col-reverse items-center justify-center md:flex-row">
        {children}
      </main>
    </div>
  );
};

export default AllContainer;
