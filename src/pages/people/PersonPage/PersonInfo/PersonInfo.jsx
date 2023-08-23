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
          <td>{personData.height}</td>
          <td>{personData.mass}</td>
          <td>{personData.hair_color}</td>
          <td>{personData.skin_color}</td>
          <td>{personData.eye_color}</td>
          <td>{personData.gender}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PersonInfo;
