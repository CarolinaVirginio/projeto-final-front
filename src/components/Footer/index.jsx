import './styles.css';
import React from 'react';
import logo from './logo digital college.png';
import { Grid, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer () {
    return (
        <footer>
            <Container>
                <Grid container>   
                    <Grid item>
                        <img src={logo} alt='logo da digital store' />
                        <p>Lorem ipsum dolor sit amet, consectetur<br/>
                        adipiscing elit, sed do eiusmod tempor<br/>
                        incididunt ut labore ut labore et dolore.</p>
                        <Grid container spacing={3}>
                            <Grid item>
                                <FacebookIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item>
                                <InstagramIcon sx={{ color: 'white' }} />
                            </Grid>
                            <Grid item>
                                <TwitterIcon sx={{ color: 'white' }} />
                            </Grid>
                        </Grid>           
                    </Grid>

                
                    <Grid item>
                        <h6><strong>Informação</strong></h6>
                        <p>Sobre Drip Store</p>
                        <p>Seguraça</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus pedidos</p>
                    </Grid>
                
                    <Grid item>
                        <h6><strong>Categorias</strong></h6>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bones</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </Grid>
            
                    <Grid item>
                        <h6><strong>Contato</strong></h6>
                        <p>Av. Santos Dumont, 1510 - 1<br/>
                        andar - Aldeota, Fortaleza -<br/></p>
                        <p>(85) 3051-3411</p>
                    </Grid>
                    <Grid container> 
                    <div className='final'>
                        <hr/>
                        <small>@ 2022 Digital College</small>
                    </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}
