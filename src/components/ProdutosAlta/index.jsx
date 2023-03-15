import { Container, Grid, Card, Badge  } from '@mui/material';
import './styles.css';
import tenis from './tenis.png';
import React from 'react';

function Produto(){
    return (
        <div className='ProdutosEmAlta'>
            <Grid container>
                <Grid item>
                    <Card>
                        <Badge color="success" badgeContent={"30% OFF"}>
                            
                        </Badge>
                        <img src={tenis} alt='Imagem de um tênis'/>
                    </Card>
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
        <div id='ProdutosEmAlta' >
            <Container>
                <div className='ProdutosEmAlta'>
                <div id='titulos'>
                        <h3 className='titulo1'>Produtos em alta</h3>
                        <a href='#'>Ver todos</a>
                </div>
                    <Grid container spacing={4}>
                        <Grid item xs={3}>
                        <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                        <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                        <Produto/>
                        </Grid>
                        <Grid item xs={3}>
                        <Produto/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
