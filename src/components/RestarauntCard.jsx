
const RestarauntCard = (props) => {
    const { resData } = props;
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        sla,
        locality,
        areaName
    } = resData.info;

    return (
        <div className="res-card">
            <div className="res-image-container">
                <img
                    alt="res-logo"
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId}
                />
                <div className="res-offer">{name}</div>
            </div>
            <div className="res-info">
                <h3 className="res-name">{name}</h3>
                <div className="res-rating-time">
                    <span className="res-rating">⭐ {avgRating}</span>
                    <span className="res-time">⏱️ {sla?.slaString}</span>
                </div>
                <p className="res-location">{locality}, {areaName}</p>
                <p className="res-cuisine">{cuisines.join(", ")}</p>
            </div>
        </div>
    );
};

export default RestarauntCard;
