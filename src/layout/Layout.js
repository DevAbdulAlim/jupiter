import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//Import components
import { Appbar } from "../components/appbar";

export default function SiteLayout() {
  return (
    <Fragment>
      <h1 style={{ color: "red", textAlign: "center" }}>
        This site is under development!
      </h1>
      <Appbar />
      <Outlet />
    </Fragment>
  );
}
