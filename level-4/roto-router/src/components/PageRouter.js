import { useRouteMatch as useRoute } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

const PageRouter = () => {
  const home = useRoute("/");
  const about = useRoute("/about");
  const services = useRoute("/services");
  if (home.isExact) return <Home />;
  if (about) return <About />;
  if (services) return <Services />;
};

export default PageRouter;
