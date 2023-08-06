import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PersonPage = () => {
  const [personData, setPersonData] = useState({});

  const { id } = useParams();

  async function getPersonInfo() {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    setPersonData(data);
  }

  useEffect(() => {
    getPersonInfo();
  }, []);

  return (
    <>
      <h1>{personData.name}</h1>
      <p>{personData.mass}</p>
    </>
  );
};

export default PersonPage;
