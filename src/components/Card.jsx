import * as React from 'react';
import { useCart } from "react-use-cart"


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



export default function Cards(props) {

    const { addItem } = useCart() 

    return (
        <div>
            <Card className='card' sx={{ maxWidth: 300 }} style={{ marginBottom: "20px", padding: "10px", textAlign:"center" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            R$  {props.price},00
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => addItem(props.item)} variant="contained" style={{backgroundColor:"#2c9cfe", fontSize:"17px"}}>Add ao carrinho</Button>
                </CardActions>
            </Card>
        </div>
    );
}
