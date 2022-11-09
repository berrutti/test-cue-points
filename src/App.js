import { useRef, useState } from "react";
import { Player } from "./player/index";

import styles from "./testing.module.css";

const defaultConfig = {
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
    window.playerApi = api;
    window.playerApi.addEventListener("timedmetadata", (e) => {
      console.log("This is the metadata", e);
    });
  },
};

export default function App() {
  const textInput = useRef(null);
  const [config, setConfig] = useState(defaultConfig);
  const [enabled, setEnabled] = useState(true);

  const handleReset = () => {
    setEnabled(false);
  };

  const handleLoadConfig = () => {
    setEnabled(true);
    const config = {
      ...defaultConfig,
      sources: {
        hls: {
          type: "application/vnd.apple.mpegurl",
          src: textInput.current.value,
        },
      },
    };

    setConfig(config);
  };

  return (
    <>
      <h1>HLS Live</h1>
      {enabled && <Player {...config} />}
      <div className={styles.controlsWrapper}>
        <label className={styles.inputWrapper}>
          <input ref={textInput} type="text" name="streamUrl" />
          <button type="button" name="loadStreamUrl" onClick={handleLoadConfig}>
            Load Stream
          </button>
          <button type="button" name="resetStreamUrl" onClick={handleReset}>
            Reset
          </button>
        </label>
      </div>
    </>
  );
}
