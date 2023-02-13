import React from 'react'
import ListaTVDetail from '../ListaTVDetail/ListaTVDetail'
function ListaTV(props) {
  return (
    <ListaTVDetail addOrRemoveFavs={props.addOrRemoveFavs}/>
  )
}

export default ListaTV