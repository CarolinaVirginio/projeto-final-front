import { Grid, Container, Button, Paper, Chip, Stack } from '@mui/material';
import { lime, pink } from '@mui/material/colors';
import imagem1 from "./img/img1.png";
import imagem2 from "./img/img2.png";
import imagem3 from "./img/img3.png";


import "./styles.css";


export default function ColecoesDestaque() {
    return (
        <Container className='Container'>
            <h3>Coleções em Destaque</h3>
            <Grid container  spacing={2.5}>
                <Grid item>
                    <Paper className='card' elevation={2} sx={{backgroundColor: "#D8E3F2"}}>
                        <div className='conteudo'>
                            <Chip className='chip' label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "bold"}} />
                            <h2> <strong>Novo drop<br /> Supreme </strong> </h2>
                            <br/>
                            <Button sx={{backgroundColor: "white", color: pink[500], fontWeight: "bold", textTransform: "capitalize", width:"136px", borderRadius:"8px"}} >Comprar</Button>
                        </div>
                        <div className='imagem'>
                            <img src={imagem1} />
                        </div>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper className='card' elevation={2} sx={{backgroundColor: "#D8E3F2"}}>
                        <div className='conteudo'>
                            <Chip className='chip' label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "bold"}} />
                            <h2> <strong>Coleção<br /> Adidas </strong> </h2>
                            <br/>
                            <Button  sx={{backgroundColor: "white", color: pink[500], fontWeight: "bold", textTransform: "capitalize", width:"136px", borderRadius:"8px"}} >Comprar</Button>
                            </div>
                        <div className='imagem2'>
                            <img src={imagem2} />
                        </div>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper className='card' elevation={2} sx={{backgroundColor: "#D8E3F2"}}>
                        <div className='conteudo'>
                            <Chip className='chip' label="30% OFF" sx={{backgroundColor: lime["A100"], fontWeight: "bold"}} />
                            <h2> <strong>Novo <br /> Beats Bass</strong> </h2>
                            <br/>
                            <Button sx={{backgroundColor: "white", color: pink[500], fontWeight: "bold", textTransform: "capitalize", width:"136px", borderRadius:"8px"}} >Comprar</Button>
                            </div>
                        <div className='imagem3'>
                            <img src={imagem3} />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>

        
 )
        
}
    


