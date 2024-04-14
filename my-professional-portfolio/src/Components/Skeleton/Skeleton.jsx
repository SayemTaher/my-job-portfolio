

const Skeleton = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 w-[1170px]">
                <div className="skeleton h-14 w-full"></div>
                <div className="skeleton h-[600px] w-[1170px]"></div>
                {/* <div className="skeleton h-10 w-full"></div>
                <div className="skeleton h-10 w-full"></div> */}
            </div>
        </div>
    );
};

export default Skeleton;