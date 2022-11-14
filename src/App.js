import { useMemo, useState } from "react";
import { Player } from "./player/index";

import styles from "./testing.module.css";

export default function App() {
  const [print, setPrint] = useState([]);
  console.log("mounted");
  const config = useMemo(
    () => ({
      settings: {
        liveUI: true,
      },
      sources: {
        hls: {
          type: "application/vnd.apple.mpegurl",
          src: "https://wbc-live-cdn.edge-cdn.net/mi-webcast-origin/ngrp:63726090f88b23088e6b8d84_en_all/master.m3u8",
        },
      },
      onReady: (api) => {
        console.log("On ready function called");
        window.playerApi = api;
        window.playerApi.addEventListener("timedmetadata", (e) => {
          console.log("This is the metadata", e);
          setPrint((oldArray) => [...oldArray, JSON.stringify(e)]);
        });
      },
    }),
    []
  );

  return (
    <>
      <h1>HLS Live</h1>
      <Player {...config} />
      <div className={styles.controlsWrapper}></div>
      <ul>
        {print.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}
