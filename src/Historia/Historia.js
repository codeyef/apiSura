import { Carrousel } from '../Carrousel/Carrousel.js'
import './Historia.css'
import { Integrantes } from '../Integrantes/Integrantes.js'
export function Historia() {

    return (
        <>
            <div className='hh'>
                <Carrousel></Carrousel>
                <div className='container'>

                    <Integrantes></Integrantes>

                </div>
            </div>

        </>
    )
}