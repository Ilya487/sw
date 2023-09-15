import React, { useState, useEffect } from "react";
import { useSliderMatchMedia } from "../../hooks/useSliderMatchMedia";
import { getDetailedDescription } from "../../API/getDetailedDescription";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import styles from "./EntityDetailPage.module.scss";
import { useParams } from "react-router";
import EntityInfo from "./EntityInfo/EntityInfo";
import { getEntityImg } from "../../utils/getEntityImg";
import FavoriteBtn from "../UI/FavoriteBtn/FavoriteBtn";

const EntityDetailPage = ({ entity }) => {
  const [entityData, setEntityData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);
    try {
      const data = await getDetailedDescription(id, entity);
      setEntityData(data);
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
    // <FilmPageSceleton slidesToShow={sliderOption.slidesToShow} />
    <p>Loading...</p>
  ) : (
    <div className={styles["film-page"]}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles["left-side"]}>
            <div className={styles["character-img-wrapper"]}>
              <div className={styles["character-img"]}>
                <img
                  src={getEntityImg(entityData.url, entity)}
                  alt={entityData.name}
                />
              </div>
              <FavoriteBtn
                item={entityData}
                className={styles["favorite-btn"]}
              />
            </div>
            <h1 className={styles.title}>{entityData.name}</h1>
          </div>

          <div className={styles["right-side"]}>
            <EntityInfo entity={entity} entityData={entityData} />
          </div>
        </div>
        <AdditionalInformation
          entity={entity}
          data={entityData}
          slidesToShow={sliderOption.slidesToShow}
          slidesToScroll={sliderOption.slidesToScroll}
        />
      </div>
    </div>
  );
};

export default EntityDetailPage;
