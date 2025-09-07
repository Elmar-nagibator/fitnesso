import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Register from "../pages/Register/Register";
import Wallperis from "../pages/Wallpaper/Wallperis";
import Login from "../pages/Login/Login";
import Catalog from "../pages/Catalog/Catalog";
import Company from "../pages/Compani/Company";
import Brend from "../pages/Brend/Brend";
import Card from '../pages/Card/Card'
import Buy from "../pages/Buy/Buy";
import CardPage from "../pages/CardPage/CardPage";
import Personal from "../pages/Personal/Personal";
import Placing from "../pages/Placing/Placing";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path:'wallperis',
                element:<Wallperis/>

            },{
                path:'login',
                element:<Login/>

            },{
                path:'register',
                element:<Register/>

            },{
                path:'catalog',
                element:<Catalog/>

            },{
                path:'company',
                element:<Company/>

            },{
                path:'brend',
                element:<Brend/>

            },{
                path:'card',
                element:<Card/>

            },{
                path:'buy',
                element:<Buy/>

            },{
                path:'cardPage/:id',
                element:<CardPage/>

            },{
                path:'personal',
                element:<Personal/>

            },{
                path:'placing',
                element:<Placing/>

            }

        ],
    },
])

export default router
