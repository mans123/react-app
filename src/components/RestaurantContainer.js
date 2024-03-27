import { default as list } from "/src/utils/data.js"
import { CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Search from "./Search";

const RestaurantCard = (props) => {
    const { name, areaName, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = props.RestData.info ? props.RestData.info : props.RestData;
    return (
        <div className="card">
            <img className="restImage"
                src={CDN_URL + cloudinaryImageId}
            ></img>
            <h4>{name}</h4>
            <p>{areaName}</p>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} ****</h5>
            <h5>{costForTwo}</h5>
            {/* <h5>{sla.deliveryTime} min for delivery</h5> */}
        </div>
    );
};
const RestaurantContainer = () => {
    const [restaurants, setRestaurants] = useState(list)
    const [searchText, setSearch] = useState()
    const [filteredList, setFilter] = useState(restaurants)
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // const fetchData = async () => {
    //     try {

    //         const data = await fetch(
    //             "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //         const json = await data.json()
    //         const newJson = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //         setRestaurants(newJson)
    //         setFilter(newJson)
    //     } catch (error) {
    //         setRestaurants("error")
    //         console.log(error)
    //         // setRestaurants(restaurants)
    //     }
    // }
    if (restaurants.length === 0) {
        return <Shimmer />
    }
    return (
        <>
            <button className="filter-btn" onClick={() => {

                const newRestaurants = restaurants.filter((rest) =>
                    rest.avgRating > 4.3
                    // console.log(rest.avgRating > 4.3)
                    // rest.info.avgRating > 4.3
                )
                setRestaurants(newRestaurants)
            }} >Top Rated Restaurant</button >
            <Search data={{ searchText, setSearch, restaurants, setRestaurants, filteredList, setFilter }} />
            <div id="container">
                {
                    filteredList.map(rest =>
                        <RestaurantCard key={rest.id ? rest.id : rest.info.id} RestData={rest} />
                    )
                }
            </div>
        </>
    );
};

export default RestaurantContainer