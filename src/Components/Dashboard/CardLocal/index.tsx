import * as React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

interface CardLocalProps {
  key: number,
  msg: string
}

const CardLocal: React.FC<CardLocalProps> = (props): JSX.Element => {

  return (
    <React.Fragment>
        <Card sx={{display: 'flex', width: 750, flexDirection: { sm: 'column', md: 'row' }, height: 200, m: 0 }}>
          <CardMedia sx={{width: { sm: "100%", md: 300 }, height: 200}} 
            image="https://cdn.eurekacoworking.com/wp-content/uploads/2020/10/21233518/escritorio-flexivel.jpg"
            title="Live from space album cover"
          />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{ flex: '1 0 auto'}}>
                <Typography component="h5" variant="h5">
                  {props.msg}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Localização
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small" color="primary" sx={{ borderRadius: 5, textTransform: "none"}}>
                  Agendar
                </Button>
              </CardActions>
            </Box>
        </Card>
    </React.Fragment>
  );
}

export default CardLocal;