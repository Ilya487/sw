import React, { useState, useEffect } from "react";
import { useSliderMatchMedia } from "../../hooks/useSliderMatchMedia";
import { getDetailedDescription } from "../../API/getDetailedDescription";
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation";
import styles from "./EntityDetailPage.module.scss";
import { useParams } from "react-router";
import EntityInfo from "./EntityInfo/EntityInfo";
import { getEntityImg } from "../../utils/getEntityImg";
import FavoriteBtn from "../UI/FavoriteBtn/FavoriteBtn";
import EntityDetailPageSkeleton from "./EntityDetailPageSkeleton/EntityDetailPageSkeleton";
import { handleImageError } from "../../utils/handleImageError";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import { useFetching } from "../../hooks/useFetching";

const EntityDetailPage = ({ entity }) => {
  const [entityData, setEntityData] = useState();

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
    const data = await getDetailedDescription(id, entity);
    setEntityData(data);
  }

  const { fetchData, isError, isLoading } = useFetching(getInfo);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  return isError ? (
    <ErrorPage />
  ) : isLoading ? (
    <EntityDetailPageSkeleton
      entity={entity}
      slidesToShow={sliderOption.slidesToShow}
    />
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
                  onError={handleImageError}
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
