import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedDescription } from "../../../API/getDetailedDescription";
import styles from "./PersonPage.module.scss";
import { getEntityImg } from "../../../utils/getEntityImg";
import PersonInfo from "./PersonInfo/PersonInfo";

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
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles["left-side"]}>
                <img src={getEntityImg(personData.url, "people")} alt="" />
                <h1>{personData.name}</h1>
                <p>{personData.birth_year}</p>
              </div>
              <div className={styles["right-side"]}>
                <PersonInfo personData={personData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonPage;
