import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Search from "./components/Search";
import RestaurantContainer from "./components/RestaurantContainer";
import Footer from "./Footer";




const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Search /> */}
      <RestaurantContainer />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
