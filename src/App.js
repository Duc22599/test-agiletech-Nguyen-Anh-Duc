import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Page/Login";

import { HomePage } from "./components/Page/HomePage";
import { Profile } from "./components/Page/ProFIle";
import { ModalEdit } from "./components/Modal/ModalEdit";
import { PrivateRouter } from "./components/PrivateRouter";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "profile",
    element: (
      <PrivateRouter>
        <Profile />
      </PrivateRouter>
    ),
  },
  {
    path: ":id",
    element: <ModalEdit />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
