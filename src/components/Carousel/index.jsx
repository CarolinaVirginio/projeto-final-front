import './styles.css';
import foto1 from './foto1.jpg';
// import foto2 from './foto2.jpg';
// import foto3 from './foto3.jpg';
  

export default function Carousel() {
    return (
        <section className='ofertas'>
            <div>
                <h6 style={{color: 'orange'}}> <strong> Melhores orfertas personalizadas </strong> </h6>
                <h1> <strong> Queima de <br/>
                    estoque Nike </strong>
                </h1>
                <p className='texto'>Consequat culpa exercitation mollit nisi excepteur do <br/>
                    do tempor laboris eiusmod irure consectetur.
                </p>
                <div>
                    <button className='button'> <strong> Ver Ofertas </strong> </button>
                </div>
            </div>

            <div>
                <img src={foto1} alt='' className='img'/>
                {/* <img src={foto2} alt=''/>
                <img src={foto3} alt=''/> */}
            </div>
        </section>
    )
}
