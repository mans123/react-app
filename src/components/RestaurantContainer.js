import restaurants from "/src/utils/data.js"
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, areaName, cuisines, avgRating, cloudinaryImageId, costForTwo } = props.RestData.info;
    return (
        <div className="card">
            <img className="restImage"
                src={CDN_URL + cloudinaryImageId}
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

export default RestaurantContainer