import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState, useEffect } from "react";
import { servicioTOKEN } from "../services/servicioTOKEN.js";

export function Albumes (){

    //declarando mi primer useState
    const [canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const [carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){
        servicioSpoty()
    .then(function(respuesta){
        console.log(respuesta);
        setCanciones(respuesta.tracks)
        setCarga(false)
    })
    console.log(canciones);
    },[])

    if(carga==true){

       return(
        <>
            
        </>
       ) 

    }else{
        return(
            <>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    canciones.map((cancion) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-5 border-dark bg-dark">
                                        <img src={cancion.album.images[0].url} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center  text-white fs-3 mt-2">{cancion.name}</h1>
                                        <h1 className="text-center  fs-3 text-white">{cancion.popularity}</h1>
                                        <audio className="w-100" controls src={cancion.preview_url}></audio>
                                    </div>
                                </div>
                            </>

                        )

                    })
                }
            </div>
        </>
        )
    } 
}