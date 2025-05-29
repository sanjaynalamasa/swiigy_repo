
const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(20).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-img" />
          <div className="shimmer-text shimmer-title" />
          <div className="shimmer-text shimmer-subtitle" />
          <div className="shimmer-text shimmer-subtitle short" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
