import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "/data.js";

const Header = () => {
  return (
    <div id="header">
      <img
        id="logo"
        src="https://logowik.com/content/uploads/images/t_free-food-delivery6258.logowik.com.webp"
      ></img>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};
const Search = () => {
  return (<div id="search">
    <input type="text"></input>
    <button>Search</button>
  </div>)
};
// const RestaurantCard = (props) => {
//   const { name, area, cuisines, rating, image, cost } = props.RestData;
//   return (
//     <div className="card">
//       <img className="restImage"
//         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + image}
//       ></img>
//       <h4>Name: {name}</h4>
//       <h4>Area: {area}</h4>
//       <h4>Cuisines: {cuisines.join(", ")}</h4>
//       <h4>Avg Rating: {rating}</h4>
//       <h4>{cost}</h4>
//     </div>
//   );
// };

// const RestaurantContainer = () => {
//   return (
//     <div id="container">
//       {
//         restaurants.map(rest =>
//         (<RestaurantCard key={rest.info.id}
//           RestData={{
//             name: rest.info.name,
//             area: rest.info.areaName,
//             cuisines: rest.info.cuisines,
//             rating: rest.info.avgRating,
//             image: rest.info.cloudinaryImageId,
//             cost: rest.info.costForTwo
//           }}
//         />)
//         )
//       }
//     </div>
//   );
// };

// Refactored code
const RestaurantCard = (props) => {
  const { name, areaName, cuisines, avgRating, cloudinaryImageId, costForTwo } = props.RestData.info;
  return (
    <div className="card">
      <img className="restImage"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      ></img>
      <h4>Name: {name}</h4>
      <h4>Area: {areaName}</h4>
      <h4>Cuisines: {cuisines.join(", ")}</h4>
      <h4>Avg Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const RestaurantContainer = () => {
  return (
    <div id="container">
      {
        restaurants.map(rest =>
          <RestaurantCard key={rest.info.id} RestData={rest} />
        )
      }
    </div>
  );
};
const Footer = () => {
  return (
    <div id="footer">
      <div id="footer">
        <p>made with Love</p>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Search />
      <RestaurantContainer />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
