import RestarauntCard from "./RestarauntCard.jsx";
import { useState, useEffect } from "react";
// import restaurantData from "../utils/mockdata.js";
import Shimmer from "./Shimmer.jsx";

const Body = () => {
    const [listofRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText,setsearchText] = useState("");

    console.log("Body Re-Render");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0082852&lng=79.5512119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            const restaurantCard = (json?.data?.cards || []).find(
                card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
            const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListOfRestaurants(restaurants);
            setfilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };

    // if(listofRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listofRestaurants.length === 0 ? <Shimmer />: (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    <button 
                    onClick={() => {
                        console.log(searchText);
                       const filteredRestaurants = listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                         setfilteredRestaurants(filteredRestaurants);

                    }}>Search</button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredRestaurants = listofRestaurants.filter(
                            (res) => res.info?.avgRating > 4
                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((res) => (
                    <RestarauntCard key={res.info.id} resData={res} />
                ))}
            </div>
        </div>
    );
};

export default Body;
