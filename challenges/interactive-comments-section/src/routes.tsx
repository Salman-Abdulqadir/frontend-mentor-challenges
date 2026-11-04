import { createBrowserRouter } from "react-router-dom";
import Comments from "./components/comments";

const appRoutes = createBrowserRouter([
  {
    path: "*",
    Component: Comments,
  },
]);

export default appRoutes;
