import Skeleton from "../Skeleton/Skeleton";


const Loader = () => {
    return (
        
            
            <div className="flex gap-5 flex-col mt-10 justify-center items-center ">
                <Skeleton></Skeleton>
            <div className="flex gap-2">
            <span className="loading loading-bars loading-lg"></span>
            <h1 className="text-4xl font-bold">Holding on . . .</h1>
            </div>

            </div>
       
    );
};

export default Loader;