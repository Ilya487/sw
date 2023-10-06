import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import styles from "./PersonPage.module.scss";
import { getEntityImg } from "../../../utils/getEntityImg";
import PersonInfo from "./PersonInfo/PersonInfo";
import PersonInfoPreloader from "./PersonInfoPreloader/PersonInfoPreloader";
import AdditionalInformation from "../../../components/AdditionalInformation/AdditionalInformation";
import { useSliderMatchMedia } from "../../../hooks/useSliderMatchMedia";
import FavoriteBtn from "../../../components/UI/FavoriteBtn/FavoriteBtn";
import { useFetching } from "../../../hooks/useFetching";
import ErrorPage from "../../ErrorPage/ErrorPage";

const PersonPage = () => {
  const [personData, setPersonData] = useState();

  const sliderOption = useSliderMatchMedia(
    [
      {
        media: "(max-width: 640px)",
        options: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        media: "(max-width: 440px)",
        options: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    { slidesToShow: 4, slidesToScroll: 2 }
  );

  const { id } = useParams();

  async function getInfo() {
    const data = await getDetailedDescription(id, "people");
    setPersonData(data);
  }

  const { fetchData, isError, isLoading } = useFetching(getInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return (
    <>
      {isError ? (
        <ErrorPage />
      ) : isLoading ? (
        <PersonInfoPreloader slidesToShow={sliderOption.slidesToShow} />
      ) : (
        <div className={styles["person-page"]}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles["left-side"]}>
                <div className={styles["character-img-wrapper"]}>
                  <div className={styles["character-img"]}>
                    <img
                      src={getEntityImg(personData.url, "people")}
                      alt={personData.name}
                    />
                  </div>
                  <FavoriteBtn
                    item={personData}
                    className={styles["favorite-btn"]}
                  />
                </div>
                <h1>{personData.name}</h1>
                <p>{personData.birth_year}</p>
              </div>
              <div className={styles["right-side"]}>
                <PersonInfo personData={personData} />
                <AdditionalInformation
                  entity={"people"}
                  data={personData}
                  slidesToShow={sliderOption.slidesToShow}
                  slidesToScroll={sliderOption.slidesToScroll}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonPage;
