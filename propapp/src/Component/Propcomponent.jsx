import React from "react";

function Propcomponent({color,name}) {
  return (
    <div>
      <div
        style={{
          width: "130px",
          height: "190px",
          boxShadow: "0px 0px 10px black",
          margin: "70px",
          textAlign: "start",
        }}
      >
        <div
          style={{ width: "130px", height: "75%", backgroundColor:color }}
        ></div>

        <div style={{ height: "25%" }}>
          <h5 style={{ marginTop: "2px", marginLeft: "2px" }}>
            #FF6663{" "}
            <p style={{ color:color, marginTop: "2px", marginLeft: "2px" }}>
              {name}
            </p>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Propcomponent;
