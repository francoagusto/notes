import React from 'react';

const Canvas = ({children, ...others}) => (
  <div
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "absolute"
    }}
    {...others}
  >
    {children}
  </div>
);

export default Canvas;
