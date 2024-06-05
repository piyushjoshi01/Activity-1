import { Route, Routes } from "react-router-dom";
import signup from "../pages/signup";
import login from "../pages/login";

import uploadimage from "../pages/uploadimage";
import Home from "../pages/home";
import landingpage from "../pages/landingpage";
import UsersList from "../pages/userlist";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" Component={signup} />
      <Route path="/login" Component={login} />
      <Route path="/" Component={landingpage} />
      <Route path="/upload-image" Component={uploadimage} />
      <Route path="/home" Component={Home} />
      <Route path="/users" Component={UsersList} />
    </Routes>
  );
};
