import { useMemo } from "react";
import { Player } from "./player/index";

import styles from "./testing.module.css";

export default function App() {
  console.log("mounted");
  const config = useMemo(
    () => ({
      settings: {
        liveUI: true,
      },
      sources: {
        hls: {
          type: "application/vnd.apple.mpegurl",
          src: "https://wbc-live-2-cdn.edge-cdn.net/mi-webcast-origin/ngrp:636a7540c23a403c196bfe93_en_all/master.m3u8",
        },
      },
      onReady: (api) => {
        console.log("On ready function called");
        window.playerApi = api;
        window.playerApi.addEventListener("timedmetadata", (e) => {
          console.log("This is the metadata", e);
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
    </>
  );
}
