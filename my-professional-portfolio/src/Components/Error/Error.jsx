
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <div className='flex mt-10  flex-col gap-10 justify-center items-center'>
            <div role="alert" className="alert w-[800px] alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>404 Error!! Page does not exist  </span>
            </div>
            <Link to="/"><button className='btn bg-black w-[300px] text-white font-bold'>Go Back</button></Link>
        </div>
    );
};

export default Error;