import { Container, Grid  } from '@mui/material';
import './styles.css';
import tenis from './tenis.png';
import React from 'react';

function Produto(){
    return (
        <div className='ProdutosEmAlta'>
            <Grid container>
                <Grid item>
                    <div>
                        <img src={tenis} alt='Imagem de um tênis'/>
                    </div>
                    <small>Tênis</small>
                    <p id='descriçao'>K-Swiss V8 - Masculino</p><br/>
                    <div id='valor'>
                        <p id='duzentos'>$200</p> <strong id='cem'>$100</strong>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default function ProdutosAlta () {
    return (
        <Container>
            <div className='ProdutosEmAlta'>
            <div id='titulos'>
                    <h3 className='titulo1'>Produtos em alta</h3>
                    <a href='#'>Ver todos</a>
            </div>
                <Grid container>
                    <Grid item>
                    <Produto/>
                    </Grid>
                    
                </Grid>
            </div>
        </Container>
    )
}
