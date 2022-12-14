import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";


const router = createBrowserRouter([

  {
    path: "/home",
    element: <Home />
  }

]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;