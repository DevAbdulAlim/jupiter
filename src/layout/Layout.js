import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//Import components
import { Appbar } from "../components/appbar";

export default function SiteLayout() {
  return (
    <Fragment>
      <Appbar />
      <Outlet />
    </Fragment>
  );
}
