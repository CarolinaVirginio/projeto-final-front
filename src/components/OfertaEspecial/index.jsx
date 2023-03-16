import './styles.css';
import especial from './especial.png';

export default function OfertaEspecial(){
    return(
        <div className='oferta'>
            <img src={especial} alt='' className='img'/>
            <div>
                <h6 style={{color: " rgb(255, 0, 170) " }}> <strong>Oferta especial</strong> </h6>
                <h1> <strong> Air Jordan edição de <br/> 
                    colecionador </strong>
                </h1>
                <p className='texto'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
                    aliquip.
                </p>
                <div>
                    <button className='button'> <strong> Ver Oferta </strong> </button>
                </div>
            </div>
        </div>
    )
}