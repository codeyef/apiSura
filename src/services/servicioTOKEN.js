export async function servicioTOKEN(){



    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=4c2a925f8eab4123a64cf7da79d61dbc"
    const DATO3="client_id=bf30a78524a940459f70c405b0fafb3e"

    //peticion 
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token

    return datos

}