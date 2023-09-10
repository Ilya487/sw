import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import styles from "./PersonPage.module.scss";
import { getEntityImg } from "../../../utils/getEntityImg";
import PersonInfo from "./PersonInfo/PersonInfo";
import PersonInfoPreloader from "./PersonInfoPreloader/PersonInfoPreloader";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";

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
                <div className={styles["character-img-wrapper"]}>
                  <div className={styles["character-img"]}>
                    <img src={getEntityImg(personData.url, "people")} alt="" />
                  </div>
                </div>
                <h1>{personData.name}</h1>
                <p>{personData.birth_year}</p>
              </div>
              <div className={styles["right-side"]}>
                <PersonInfo personData={personData} />
                <AdditionalInformation
                  data={personData}
                  slidesToShow={4}
                  slidesToScroll={2}
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
