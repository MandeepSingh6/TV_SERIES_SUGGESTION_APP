import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

const FiveStarRating = ({ rating }) => {
  const starList = [];
  const starFilledCount = Math.floor(rating);
  const hasHalfStar = rating - parseInt(rating) >= 0.5;
  const emptyStar = 5 - starFilledCount - (hasHalfStar ? 1 : 0);
  for (let i = 1; i <= starFilledCount; i++) {
    starList.push(<StarFill key={"starFill" + i} />);
  }
  if (hasHalfStar) {
    starList.push(<StarHalf key={"StarHalf"} />);
  }
  for (let i = 1; i <= emptyStar; i++) {
    starList.push(<StarEmpty key={"emptyStar" + i} />);
  }
  return <div>{starList}</div>;
};

export default FiveStarRating;
