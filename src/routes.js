import { Route, Routes } from "react-router-dom";
import Page1 from "./Pages/Page1";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={Page1} />
    </Routes>
  );
}

export default MainRoutes;
