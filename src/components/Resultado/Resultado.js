import React from "react";
import canales from "../../canales.json";
import ReactPlayer from "react-player";

function Resultado() {
  const query = new URLSearchParams(window.location.search);
  const idCanal = query.get("canalId");

  const canal = canales.find((oneCanal) => oneCanal.id === idCanal);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h2 className="m-2">{canal.nombre}</h2>
      <ReactPlayer
        controls
        url={canal.link}
        className="react-player"
        playing
        width="70%"
        height="70%"
      />
    </div>
  );
}

export default Resultado;
