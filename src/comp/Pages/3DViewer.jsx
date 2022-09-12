import React from "react";
import { DAEModel, DirectionLight } from "react-3d-viewer";

const url =
  "https://sketchfab.com/models/15c52906673648b09d5ac8d8ee7ff6e9/embed?autostart=0&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=1&ui_watermark_link=1%22";

const iframe = `<iframe height="765" style="width: 100%;" scrolling="no" title="fx." src="${url}"></iframe>`;

function Iframe(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }} />;
}

const ThreeDViewer = (props) => {
  if (props.match.params.type === "url") {
    return (
      <div className="App">
        <Iframe iframe={iframe} />,
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DAEModel src={"/assets/3d/burger.dae"}>
        <DirectionLight color={0xff00ff} />
      </DAEModel>
    </div>
  );
};

export default ThreeDViewer;
