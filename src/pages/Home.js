import { Fragment } from "react";
import { AboutUs } from "../components/about-us";
import { FeaturedCategory } from "../components/category";
import { Client } from "../components/client";
import { FeaturedCourses } from "../components/course";
import { Header } from "../components/header";
import { Reviews } from "../components/review";
import { Teachers } from "../components/teacher";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Client />
      <AboutUs />
      <FeaturedCourses />
      <FeaturedCategory />
      <Teachers />
      <Reviews />
      <Footer />
    </Fragment>
  );
}
