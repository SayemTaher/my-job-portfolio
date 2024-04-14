

const Skeleton = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 w-[400px] bg-blue-100  lg:w-[1170px] ">
                <div className="skeleton h-14 w-[400px] bg-blue-100   lg:w-full"></div>
                <div className="skeleton h-[500px] bg-blue-100  lg:h-[600px] w-[400px]  lg:w-[1170px]"></div>
                {/* <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div> */}
            </div>
        </div>
    );
};

export default Skeleton;