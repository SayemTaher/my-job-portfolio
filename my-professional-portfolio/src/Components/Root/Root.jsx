import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";


const Root = () => {

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        const fakeLoader = () =>{
            setTimeout(() =>{
                setIsLoading(false)
            },2000)
        }

        fakeLoader()

    },[])



    return isLoading? (
        <Loader></Loader>
    ) : (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    )
};

export default Root;