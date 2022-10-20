import './Home.css'

import { SubMenu } from '../SubMenu/SubMenu.js'

import { Footer } from '../Footer/Footer.js'

export function Home(){
    let descripcionBanda=" esta banda fué escencial en la musica de la epoca mucho antes de que hubiera conflicto empezando por el voclista."

    return(
        <>
            
            <div className='banner'></div>
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center text'>the queen</h1>
                            
                            <p className='text-center'>{descripcionBanda}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SubMenu></SubMenu>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )

}