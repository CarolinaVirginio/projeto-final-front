import './styles.css';
import logo from './logo digital college.png';

export default function Footer () {
    return (
        <>
        <section className='container-fluid'>
            <div className='row'>
                <div id='coluna-1' className='col offset-1'>
                    <img src={logo} alt='logo da digital store' />
                    <p>Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit, sed do eiusmod tempor<br/>
                    incididunt ut labore ut labore et dolore.</p>
                    <a href="https://www.flaticon.com/br/icones-gratis/logotipo-do-instagram" title="logotipo do instagram ícones"></a>
                </div>
                <div className='col'>
                   <h6><strong>Informação</strong></h6>
                    <p>Sobre Drip Store</p>
                    <p>Seguraça</p>
                    <p>Wishlist</p>
                    <p>Blog</p>
                    <p>Trabalhe conosco</p>
                    <p>Meus pedidos</p>
                </div>
                <div className='col'>
                    <h6><strong>Categorias</strong></h6>
                    <p>Camisetas</p>
                    <p>Calças</p>
                    <p>Bones</p>
                    <p>Headphones</p>
                    <p>Tênis</p>
                </div>
                <div className='col'>
                    <h6><strong>Contato</strong></h6>
                    <p>Av. Santos Dumont, 1510 - 1<br/>
                    andar - Aldeota, Fortaleza -<br/></p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <div className='final'>
                <hr/>
                <small>@ 2022 Digital College</small>
            </div>
        </section>
        </>
    )
}
