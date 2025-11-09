import Skeleton from "../Skeleton/Skeleton";


const Loader = () => {
    return (
      <div className="flex  flex-col bg-gradient-to-br from-slate-900 via-navy-900 to-indigo-900  justify-center h-screen items-center ">
        <span className="loading text-white loading-bars loading-lg"></span>
      </div>
    );
};

export default Loader;