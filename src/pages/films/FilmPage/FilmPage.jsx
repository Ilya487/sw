import React, { useState, useEffect } from "react";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import { useParams } from "react-router";
import FilmInfo from "./FilmInfo/FilmInfo";
import styles from "./FilmPage.module.scss";
import RelatedData from "../../../components/RelatedData/RelatedData";
import { getEntityImg } from "../../../utils/getEntityImg";
import FavoriteBtn from "../../../components/UI/FavoriteBtn/FavoriteBtn";
import FilmPageSceleton from "./FilmPageSceleton/FilmPageSceleton";
import AdditionalInformation from "../../../components/AdditionalInformation/AdditionalInformation";

const FilmPage = () => {
  const [filmData, setFilmData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  async function getInfo() {
    setIsLoading(true);
    try {
      const data = await getDetailedDescription(id, "films");
      setFilmData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return isLoading ? (
    <FilmPageSceleton />
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
          slidesToShow={5}
          slidesToScroll={2}
        />
      </div>
    </div>
  );
};

export default FilmPage;
