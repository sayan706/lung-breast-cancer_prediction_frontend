import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Breast from "../pages/Breast";
import Lung from "../pages/Lung";
import App from "../App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="lung-predict" element={<Lung />} />
        <Route path="breast-predict" element={<Breast />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </>
  )
);

export default router;
