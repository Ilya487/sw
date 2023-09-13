import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import styles from "./PersonPage.module.scss";
import { getEntityImg } from "../../../utils/getEntityImg";
import PersonInfo from "./PersonInfo/PersonInfo";
import PersonInfoPreloader from "./PersonInfoPreloader/PersonInfoPreloader";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import { useSliderMatchMedia } from "../../../hooks/useSliderMatchMedia";
import FavoriteBtn from "../../../components/UI/FavoriteBtn/FavoriteBtn";

const PersonPage = () => {
  const [personData, setPersonData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    try {
      const data = await getDetailedDescription(id, "people");
      setPersonData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {isLoading ? (
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
