import { Fragment } from "react";
import { Client } from "../components/client";
import { Header } from "../components/header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Client />
    </Fragment>
  );
}
