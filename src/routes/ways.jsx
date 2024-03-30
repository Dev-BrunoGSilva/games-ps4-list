import { createBrowserRouter } from "react-router-dom";

// screens
import PageHome from "../pages/PageHome";
import PagePs4 from "../pages/PagePs4";

export const Ways = createBrowserRouter([
    {
        index: true,
        path: "/",
        element: <PageHome />,
    },
    {
        path: "/ps4-list",
        element: <PagePs4 />,
    },
]);