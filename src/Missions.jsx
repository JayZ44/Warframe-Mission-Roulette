import React from "react";
import { useState } from "react";
import allMissionTypes from "./data";
import "./Missions.css";

const Missions = () => {
  const [currentMission, setCurrentMission] = useState({
    Planet: "Venus Proxima",
    Name: "Beacon Shield Ring",
    Faction: "Corpus",
    CreditReward: 2600,
    AdditionalCreditReward: 33750,
    DropTableAlias: "VenusProximaVolatile",
    Level: "17 - 20",
    TileSet: "Free Space",
  });
  const [noRailjack, setNoRailjack] = useState(false);

  //GET RANDOM MISSION -----------------------
  const functionGetRandomMission = () => {
    if (!noRailjack) {
      const randomMissionType =
        allMissionTypes[Math.floor(Math.random() * allMissionTypes.length)];
      const randomMission =
        randomMissionType[Math.floor(Math.random() * randomMissionType.length)];
      setCurrentMission(randomMission);
      // console.log("THIS IS THE PLANET", randomMission.Planet);
      // console.log(randomMission);
    } else {
      const noRailjack = allMissionTypes
        .map((type) => {
          return type.filter(
            (mission) => !mission.Planet.split(" ").includes("Proxima")
          );
        })
        .filter((type) => type.length > 0);

      if (noRailjack.length === 0) {
        console.log("No missions available after filtering");
        return;
      }

      const randomMissionType =
        noRailjack[Math.floor(Math.random() * noRailjack.length)];
      const randomMission =
        randomMissionType[Math.floor(Math.random() * randomMissionType.length)];
      setCurrentMission(randomMission);
    }
  };

  //EXCLUDE RAILJACK -----------------------
  const functionExcludeRailjack = () => {
    setNoRailjack(!noRailjack);
  };
  return (
    <div className="mission">
      Mission Name: {currentMission.Name} <br />
      Planet: {currentMission.Planet} <br />
      Mission Type: {currentMission.DropTableAlias} <br />
      Faction: {currentMission.Faction} <br />
      Level: {currentMission.Level} <br />
      <button onClick={functionGetRandomMission}>Choose Random Mission</button>
      <br />
      <div>
        <input type="checkbox" onClick={functionExcludeRailjack} />
        No Railjack 🗣️💀👎
      </div>
    </div>
  );
};

export default Missions;
