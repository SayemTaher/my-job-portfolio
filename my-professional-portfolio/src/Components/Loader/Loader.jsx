import Skeleton from "../Skeleton/Skeleton";


const Loader = () => {
    return (
        <div className="flex flex-col container mx-auto gap-10 justify-center items-center mt-5">
            <Skeleton></Skeleton>
            <div className="flex gap-5 justify-center items-center ">
            <span className="loading loading-bars loading-lg"></span>
            <h1 className="text-4xl font-bold">Holding on . . .</h1>

            </div>
        </div>
    );
};

export default Loader;