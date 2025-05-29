import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const AppLayout = () => {
     return (
        <div className="app">
            <Header />
            <Body />

        </div>
     )
}

const appRouter = createBrowserRouter([
    {
        path: "/",  
        element: <AppLayout />,
    },
    {
        path: "/about",
        element:  <About />
    }, 
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "*",
        element: <Error />
    }
     
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);


