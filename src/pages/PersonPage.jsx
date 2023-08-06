import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonInfo } from "../API/getPersonInfo";
import { getPersonImg } from "../utils/getPersonImg";

const PersonPage = () => {
  const [personData, setPersonData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  async function getInfo() {
    setIsLoading(true);
    try {
      const data = await getPersonInfo(id);
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
        <>
          <h1>{personData.name}</h1>
          <img src={getPersonImg(personData.url)} alt="" />
          <p>height: {personData.height}</p>
          <p>mass: {personData.mass}</p>
          <p>hair color: {personData.hair_color}</p>
          <p>skin_color: {personData.skin_color}</p>
          <p>eye color: {personData.eye_color}</p>
          <p>birth year: {personData.birth_year}</p>
          <p>gender: {personData.gender}</p>
        </>
      )}
    </>
  );
};

export default PersonPage;
