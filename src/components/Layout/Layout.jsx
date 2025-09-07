import React from 'react';
import Header from "./Header/Header";
import { Outlet } from 'react-router-dom';
import Footer from "./Footer/Footer";
import Product from "../../pages/Home/Product/Product";

const Layout = () => {
    return (
        <>
            <Header/>

            <main>
                <Outlet />
                <Product/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;