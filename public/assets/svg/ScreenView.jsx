import * as React from "react";
const SvgScreenView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Screen_View_svg__Layer_2"
    viewBox="0 0 908.78 543.07"
    {...props}
  >
    <defs>
      <style>
        {".Screen_View_svg__cls-1{fill:none;stroke:#000;stroke-miterlimit:10}"}
      </style>
    </defs>
    <g id="Screen_View_svg__Screen">
      <path
        d="M.5.5h907.78v542.07H.5z"
        style={{
          fill: "#fff",
        }}
      />
      <path d="M907.78 1v541.07H1V1zm1-1H0v543.07h908.78z" />
    </g>
    <g id="Screen_View_svg__Cube">
      <path
        id="Screen_View_svg__Front_Face"
        d="M549.96 424.12H356.65l-21.52-182.09h236.35z"
        className="Screen_View_svg__cls-1"
      />
      <path
        id="Screen_View_svg__Top_Face"
        d="M571.61 241.64H334.74l46.43-60.52h149.22z"
        className="Screen_View_svg__cls-1"
      />
    </g>
  </svg>
);
export default SvgScreenView;
