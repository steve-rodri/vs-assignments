import React from "react";
import coffinDance from "../sounds/coffin-dance.mp3";
import fightTheSystem from "../sounds/fight-the-system.mp3";
import flex from "../sounds/flex.mp3";
import ghoul from "../sounds/ghoul.mp3";
import myContention from "../sounds/my-contention.mp3";
import rumble from "../sounds/rumble.mp3";

const Sounds = (refs) => {
  return (
    <div className="Sounds">
      <audio src={coffinDance} ref={refs.coffinDanceRef}></audio>
      <audio src={fightTheSystem} ref={refs.fightTheSystemRef}></audio>
      <audio src={flex} ref={refs.flexRef}></audio>
      <audio src={ghoul} ref={refs.ghoulRef}></audio>
      <audio src={myContention} ref={refs.myContentionRef}></audio>
      <audio src={rumble} ref={refs.rumbleRef}></audio>
    </div>
  );
};

export default Sounds;
