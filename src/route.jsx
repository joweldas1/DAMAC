import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement:<>This is error page</>,
    children:[
      { index:true,
        element:<Home/>
      }
    ]
  },
]);

export default router