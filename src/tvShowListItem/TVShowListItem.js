import { SMALL_COVER_IMG_BASE_URL } from "../config";
import s from "./style.module.css";

const TVShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    tvShow.backdrop_path && (
      <div onClick={onClick_} className={s.container}>
        <img
          src={SMALL_COVER_IMG_BASE_URL + tvShow.backdrop_path}
          alt={tvShow.name}
          className={s.img}
        />
        <div className={s.title}>
          {tvShow.name.length > 20
            ? tvShow.name.slice(0, 20) + "..."
            : tvShow.name}
        </div>
      </div>
    )
  );
};

export default TVShowListItem;
