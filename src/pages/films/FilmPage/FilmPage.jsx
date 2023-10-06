import React, { useState, useEffect } from "react";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import { useParams } from "react-router";
import FilmInfo from "./FilmInfo/FilmInfo";
import styles from "./FilmPage.module.scss";
import { getEntityImg } from "../../../utils/getEntityImg";
import FavoriteBtn from "../../../components/UI/FavoriteBtn/FavoriteBtn";
import FilmPageSceleton from "./FilmPageSceleton/FilmPageSceleton";
import AdditionalInformation from "../../../components/AdditionalInformation/AdditionalInformation";
import { useSliderMatchMedia } from "../../../hooks/useSliderMatchMedia";
import { useFetching } from "../../../hooks/useFetching";
import ErrorPage from "../../ErrorPage/ErrorPage";

const FilmPage = () => {
  const [filmData, setFilmData] = useState();

  const sliderOption = useSliderMatchMedia(
    [
      {
        media: "(max-width: 720px)",
        options: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        media: "(max-width: 560px)",
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        media: "(max-width: 400px)",
        options: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    { slidesToShow: 5, slidesToScroll: 2 }
  );

  const { id } = useParams();

  async function getInfo() {
    const data = await getDetailedDescription(id, "films");
    setFilmData(data);
  }

  const { fetchData, isError, isLoading } = useFetching(getInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return isError ? (
    <ErrorPage />
  ) : isLoading ? (
    <FilmPageSceleton slidesToShow={sliderOption.slidesToShow} />
  ) : (
    <div className={styles["film-page"]}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles["left-side"]}>
            <div className={styles["character-img-wrapper"]}>
              <div className={styles["character-img"]}>
                <img
                  src={getEntityImg(filmData.url, "films")}
                  alt={filmData.title}
                />
              </div>
              <FavoriteBtn item={filmData} className={styles["favorite-btn"]} />
            </div>
            <h1 className={styles.title}>{filmData.title}</h1>
          </div>

          <div className={styles["right-side"]}>
            <p className={styles["film-description"]}>
              {filmData.opening_crawl}
            </p>
            <FilmInfo filmData={filmData} />
          </div>
        </div>
        <AdditionalInformation
          entity="films"
          data={filmData}
          slidesToShow={sliderOption.slidesToShow}
          slidesToScroll={sliderOption.slidesToScroll}
        />
      </div>
    </div>
  );
};

export default FilmPage;
