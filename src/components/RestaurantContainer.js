import { default as list } from "/src/utils/data.js"
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantCard = (props) => {
    const { name, areaName, cuisines, avgRating, cloudinaryImageId, costForTwo, deliveryTime } = props.RestData;
    return (
        <div className="card">
            <img className="restImage"
                src={CDN_URL + cloudinaryImageId}
            ></img>
            <h4>{name}</h4>
            <p>{areaName}</p>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} **</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} min for delivery</h4>
        </div>
    );
};
const RestaurantContainer = () => {
    const [restaurants, setRestaurants] = useState(list)
    return (
        <>
            <button className="filter-btn" onClick={() => {

                const newRestaurants = restaurants.filter((rest) =>
                    rest.avgRating > 4.3
                )
                setRestaurants(newRestaurants)
            }} >Top Rated Restaurant</button>
            <div id="container">
                {
                    restaurants.map(rest =>
                        <RestaurantCard key={rest.id} RestData={rest} />
                    )
                }
            </div>
        </>
    );
};

export default RestaurantContainer