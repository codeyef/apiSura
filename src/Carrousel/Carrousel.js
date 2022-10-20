import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export function Carrousel() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (
        <>

            <div className="container mt-5 animate__animated animate__bounce wow">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/anuel.png?alt=media&token=c19873bd-5681-492a-aa41-eaae59ecc495" height="700" className="w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/arcangel.jpg?alt=media&token=afbb2243-d779-4c49-9f78-34f8535c078a" height="700" className="w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/badbunny.jpg?alt=media&token=54f2666b-ceca-402b-9105-67476c5acb37" height="700" className="w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    )
}