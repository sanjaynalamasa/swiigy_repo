// import RestarauntCard from "./RestarauntCard.jsx"
// // import  restaurantData from "../utils/mockdata.js"
// import { useState, useEffect } from "react"
// import restaurantData from "../utils/mockdata.js"




// const Body = () => {
// //Local State variable - Super powerful variable
// const [listofRestaurants, setlistofRestaurants] = useState(restaurantData);


// useEffect(() => {
//     //console.log("useEffect callback function");
//     fetchData();
// },[]);


// const fetchData = async () => {
//     const data = await fetch(
//        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0082852&lng=79.5512119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();
// //     console.log(json);
// // setlistofRestaurants(json.); //here path giveme chatgpt





// }

//     return (
//         <div className="body">
//             <div className="filter">
//                 <button
//                  className="filter-btn"
//                  onClick={() => {
//                     //filter logic here
//                     const filteredRestaurants = listofRestaurants.filter(
//                         (res) => res.rating > 4
//                     );
//                     setlistofRestaurants(filteredRestaurants);
                   
//                  }}
                 
//                  >
//                     Top rated Restaruant</button>
//             </div>
//             <div className="res-container">
//               {listofRestaurants.map((res) => (
//           <RestarauntCard key={res.id} resData={res} />
//         ))}

//             </div>
//         </div>
//     )
// }

// export default Body;




















import RestarauntCard from "./RestarauntCard.jsx";
import { useState, useEffect } from "react";
import restaurantData from "../utils/mockdata.js";

const Body = () => {
    const [listofRestaurants, setListOfRestaurants] = useState(restaurantData);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.0082852&lng=79.5512119&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            console.log(json);

            const restaurants = 
                json?.data?.cards?.find(card => 
                    card.card?.card?.id === "restaurant_grid_listing"
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setListOfRestaurants(restaurants);
        } catch (error) {
            console.error("Failed to fetch restaurant data:", error);
        }
    };

    return (
        <div className="body">
            <div className="filter">
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
                {listofRestaurants.map((res) => (
                    <RestarauntCard key={res.info.id} resData={res} />
                ))}
            </div>
        </div>
    );
};

export default Body;
