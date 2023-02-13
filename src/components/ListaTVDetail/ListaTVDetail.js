import React from "react";
import { Link } from "react-router-dom";
import canales from "../../canales.json";


function ListaTVDetail(props) {
  console.log(props);
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {canales.map((oneTv) => {
        return (
          <div class="card m-3" style={{width: '15rem', borderRadius: '10px'}} key={oneTv.id}>
            <img class="ccard-img-top" src={oneTv.img} style={{width: '100%', height: '100%', objectFit: 'contain', padding: '5px'}} alt="Card image cap" align='center'/>
            <button className="fav-btn" onClick={ props.addOrRemoveFavs } data-movieid={ oneTv.id }> 🖤 </button>
            <div class="card-body">
              <h5 class="card-title">{oneTv.nombre}</h5>
              <Link to={`/resultado?canalId=${oneTv.id}`} class="btn btn-primary">
                Ver Canal
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListaTVDetail;
