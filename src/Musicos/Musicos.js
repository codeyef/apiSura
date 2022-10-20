import { Footer } from '../Footer/Footer.js'
import { Carrousel } from '../Carrousel/Carrousel.js'

export function Musicos() {

    //un arreglo de objetos es formato comun al consumir un api

    let musicos = [
        {
            nombre: "arcangel",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/arcangelc.jpg?alt=media&token=4e6e661d-2e0c-4e75-b7a3-d11331c0a1a9"
        },
        {
            nombre: "anuel",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/anulec.webp?alt=media&token=c9724dd9-73d8-4b95-aa1a-7721f7e1137a"
        }
    ]

    let conciertosMemorables = [
        {
            fecha: "17/6/2019",
            ubicacion: "Bogota, colombia",
            descripcion: "el artista lanzaron sus nuevas canciones en Bogotá y dieron una gran fiesta para un público heterogéneo que esperaba con ansias canciones como “No Copio” y “María”.",
            foto: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/arcangelc.jpg?alt=media&token=4e6e661d-2e0c-4e75-b7a3-d11331c0a1a9"
        },
        {
            fecha: "31/7/2021",
            ubicacion: "Cundinamarca, colombia",
            descripcion: "el festival de Hip Hop ‘This is Real’, presentará en el festival a: Tres Coronas; Afu-ra; Doble Porción; Anarkía; DJ 113 and Friends .",
            foto: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/anulec.webp?alt=media&token=c9724dd9-73d8-4b95-aa1a-7721f7e1137a"
        },
        {
            fecha: "5/12/2015",
            ubicacion: "Bucaramanga, colombia",
            descripcion: "Los artistas de Doble porcion, la rompieron en su concierto en el hipodromo libre de bucaramanga con sus mejores exitos",
            foto: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/arcangelc.jpg?alt=media&token=4e6e661d-2e0c-4e75-b7a3-d11331c0a1a9"
        },
        {
            fecha: "2/6/2018",
            ubicacion: "Bogota, colombia",
            descripcion: "En Bogotá hacia falta el flow callejero y poético en vivo de los raperos paisas de la agrupación Doble Porción Por eso el proximo 2 de junio en el Auditorio Lumiere se celebrara Manzanas A La Vuelta (Su más reciente álbum) en la cuidad de Bogotá. Una cita para cantar a todo pulmón todos los temas del álbum y además canciones clásicas de Doble Porción de sus anterior álbum: El Abrebocas",
            foto: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/anulec.webp?alt=media&token=c9724dd9-73d8-4b95-aa1a-7721f7e1137a"
        },
        {
            fecha: "8/5/2022",
            ubicacion: "Medellin, colombia",
            descripcion: "El duo de raperos se presentan en la ciudad que los vio nacer con su album 'que parezca concierto' uno de sus ultimos conciertos en pareja, ",
            foto: "https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/arcangelc.jpg?alt=media&token=4e6e661d-2e0c-4e75-b7a3-d11331c0a1a9"
        },

    ]

    //mapeando un arreglo para hacer render
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    musicos.map((musico) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-5 border-dark bg-dark">
                                        <img src={musico.url} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center  text-white fs-3 mt-2">{musico.nombre}</h1>
                                        <h1 className="text-center  fs-3 text-white">{musico.rol}</h1>
                                    </div>
                                </div>
                            </>

                        )

                    })
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-3 justify-content-center ">
                {
                    conciertosMemorables.map((conciertoMemorable) => {
                        return (
                            <>
                                <div className="col mt-5 ">
                                    <div className="card h-100 align-content-center border-3 border-dark bg-black">
                                        <img src={conciertoMemorable.foto} className="img-fluid h-100 p-1 w-100" alt="foto" />
                                        <h1 className="text-center fs-5 text-white mt-2">{conciertoMemorable.ubicacion}</h1>
                                        <h1 className="text-center fs-5 text-white ">{conciertoMemorable.fecha}</h1>
                                        
                                        <h1 className="text-center fs-5 text-white">{conciertoMemorable.descripcion}</h1>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div>
            <Carrousel></Carrousel>
            </div>
            <div >
                <Footer></Footer>
            </div>
            
        </>

    )

}

