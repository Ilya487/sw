import React from "react";
import styles from "./PersonInfo.module.scss";

const PersonInfo = ({ personData }) => {
  return (
    <table className={styles["person-info"]}>
      <thead>
        <tr>
          <th>Height:</th>
          <th>Mass:</th>
          <th>Hair:</th>
          <th>Skin:</th>
          <th>Eye:</th>
          <th>Gender:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td aria-label="Height">{personData.height}</td>
          <td aria-label="Mass">{personData.mass}</td>
          <td aria-label="Hair">{personData.hair_color}</td>
          <td aria-label="Skin">{personData.skin_color}</td>
          <td aria-label="Eye">{personData.eye_color}</td>
          <td aria-label="Gender">{personData.gender}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PersonInfo;
