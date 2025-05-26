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
  const [currentMissionTypeData, setCurrentMissionTypeData] =
    useState(allMissionTypes);
  const [previousMissionTypeData, setPreviousMissionTypeData] = useState(
    "Previous Mission Type Data"
  );

  //GET RANDOM MISSION -----------------------
  const functionGetRandomMission = () => {
    const randomMissionType =
      currentMissionTypeData[
        Math.floor(Math.random() * currentMissionTypeData.length)
      ];
    const randomMission =
      randomMissionType[Math.floor(Math.random() * randomMissionType.length)];
    setCurrentMission(randomMission);
    console.log("THIS IS THE PLANET", randomMission.Planet);
    console.log(currentMission);
  };

  //EXCLUDE RAILJACK -----------------------
  const functionExcludeRailjack = () => {
    console.log(
      setCurrentMissionTypeData(
        currentMissionTypeData.filter((missionType) => missionType.Planet)
      )
    );
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
      <button onClick={functionExcludeRailjack}>No Railjack 🗣️💀👎</button>
    </div>
  );
};

export default Missions;
