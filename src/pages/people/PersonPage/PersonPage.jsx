import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import styles from "./PersonPage.module.scss";
import { getEntityImg } from "../../../utils/getEntityImg";
import PersonInfo from "./PersonInfo/PersonInfo";
import RelatedData from "../../../components/RelatedData/RelatedData";
import PersonInfoPreloader from "./PersonInfoPreloader/PersonInfoPreloader";

const PersonPage = () => {
  const [personData, setPersonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
        <PersonInfoPreloader />
      ) : (
        <div className={styles["person-page"]}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles["left-side"]}>
                <img src={getEntityImg(personData.url, "people")} alt="" />
                <h1>{personData.name}</h1>
                <p>{personData.birth_year}</p>
              </div>
              <div className={styles["right-side"]}>
                <PersonInfo personData={personData} />

                {personData.films.length > 0 && (
                  <div className={styles["related-data"]}>
                    <h3 className={styles["slider-title"]}>Films</h3>
                    <RelatedData urls={personData.films} />
                  </div>
                )}

                {personData.starships.length > 0 && (
                  <div className={styles["related-data"]}>
                    <h3 className={styles["slider-title"]}>Starships</h3>
                    <RelatedData urls={personData.starships} />
                  </div>
                )}

                {personData.vehicles.length > 0 && (
                  <div className={styles["related-data"]}>
                    <h3 className={styles["slider-title"]}>Vehicles</h3>
                    <RelatedData urls={personData.vehicles} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonPage;
