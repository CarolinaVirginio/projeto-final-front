import './styles.css';
import tenis from './tenis.png';

function Produto(){
    return (
        <div className='row'>
                <div className='col offset-1'>
                    <div>
                        <img src={tenis} alt='Imagem de um tênis'/>
                    </div>
                    <small>Tênis</small>
                    <p id='descriçao'>K-Swiss V8 - Masculino</p><br/>
                    <div id='valor'>
                        <p id='duzentos'>$200</p> <strong id='cem'>$100</strong>
                    </div>
                </div>
            </div>
    )
}

export default function ProdutosAlta () {
    return (
        <>
           <h3>Produtos em alta</h3>
           <h6>{"Ver todos --->"}</h6>
           <div className='row'>
                <div className='col'>
                   <Produto/>
                </div>
                <div className='col'>
                    <Produto/>
                </div>
                <div className='col'>
                    <Produto/>
                </div>
                <div className='col'>
                    <Produto/>
                </div>
            </div>
           <div className='row'>
                <div className='col'>
                   <Produto/>
                </div>
                <div className='col'>
                    <Produto/>
                </div>
                <div className='col'>
                    <Produto/>
                </div>
                <div className='col'>
                    <Produto/>
                </div>
            </div>

        </>
    )
}