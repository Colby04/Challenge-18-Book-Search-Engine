"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
var App_jsx_1 = require("./App.jsx");
var SearchBooks_1 = require("./pages/SearchBooks");
var SavedBooks_1 = require("./pages/SavedBooks");
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: '/',
        element: <App_jsx_1.default />,
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <SearchBooks_1.default />
            }, {
                path: '/saved',
                element: <SavedBooks_1.default />
            }
        ]
    }
]);
client_1.default.createRoot(document.getElementById('root')).render(<react_router_dom_1.RouterProvider router={router}/>);
