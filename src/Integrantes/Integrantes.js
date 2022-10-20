import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from 'react';

export function Integrantes() {

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return (
        <>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom ">
                    <img id='img' src="https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/buhodermia.jpg?alt=media&token=2e2a2ff4-8bc9-4800-88b6-0b9769f2124a" alt="la mujer de mi tio" className="img-fluid w-100 mt-3 rounded-circle animate__animated animate__backInDown wow" data-bs-toggle="collapse" data-bs-target="#collapseExample1">
                    </img>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInDown wow'>
                    <h2> buhodermia</h2>
                    
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body">
                           arcangel
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div  className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft wow'>
                    <h2> arcangel</h2>
                    
                </div>
                <div className="col-12 col-md-4 zoom ">
                    <img id='img' src="https://firebasestorage.googleapis.com/v0/b/canciones-fedbb.appspot.com/o/arcangelc.jpg?alt=media&token=4e6e661d-2e0c-4e75-b7a3-d11331c0a1a9" alt="la mujer de mi tio" className="img-fluid w-100 mt-3 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample2">
                    </img>
                </div>

            </div>

            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse " id="collapseExample2">
                        <div className="card card-body ">
                        <b>arcangel</b>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}