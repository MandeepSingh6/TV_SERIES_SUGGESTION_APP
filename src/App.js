import React, { useEffect, useState } from "react";
import s from "./style.module.css";
import { TvShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./tvShowDetail/TVShowDetail";
import TVShowList from "./tvShowList/TVShowList";
import Logo from "./logo/Logo";
import img from "./assets/images/logo.png";
import TVShowListItem from "./tvShowListItem/TVShowListItem";
import axios from "axios";
import SearchBar from "./searchBar/SearchBar";

const App = () => {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopulars = async () => {
    try {
      const popularTVShowList = await TvShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTvShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("something went wrong while fetching data");
    }
  };
  const fetchRecommendations = async (tvShowId) => {
    try {
      const recommendations = await TvShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert("something went wrong while fetching data");
    }
  };
  const searchTVShow = async (title) => {
    try {
      const searchedTvShow = await TvShowAPI.fetchByTitle(title);
      if (searchedTvShow) {
        setCurrentTvShow(searchedTvShow);
      }
    } catch (error) {
      alert("something went wrong while fetching data");
    }
  };

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    currentTvShow && fetchRecommendations(currentTvShow.id);
  }, [currentTvShow]);

  const updateCurrentTVShow = (tvShow) => {
    setCurrentTvShow(tvShow);
  };

  if (!currentTvShow) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${
          BACKDROP_BASE_URL + currentTvShow.backdrop_path
        }) no-repeat center / cover`,
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={img}
              title={"WatchWhat"}
              subtitle={"Find show to binge"}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        <TVShowDetail tvShow={currentTvShow} />
      </div>
      <div className={s.recommended_tv_shows}>
        <TVShowList
          onClickItem={updateCurrentTVShow}
          tvShowList={recommendationList}
        />
      </div>
    </div>
  );
};

export default App;
