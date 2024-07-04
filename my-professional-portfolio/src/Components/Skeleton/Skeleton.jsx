

const Skeleton = () => {
    return (
        <div >
            <div className="flex flex-col justify-center m-10 items-center gap-4 w-52">
                <div className="skeleton h-28 lg:h-48 lg:w-[800px] w-[300px]"></div>
                <div className="skeleton h-16 lg:h-24 lg:w-[800px] w-[300px]"></div>
                <div className="skeleton h-16 lg:h-24 lg:w-[800px] w-[300px]"></div>
                <div className="skeleton h-16 lg:h-24 lg:w-[800px] w-[300px]"></div>
            </div>
        </div>
    );
};

export default Skeleton;