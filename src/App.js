import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import {RouterProvider} from "react-router-dom";
import router from "./router/routing";

function App() {
  return (
   <>
       <RouterProvider router={router}/>

   </>
  );
}

export default App;
