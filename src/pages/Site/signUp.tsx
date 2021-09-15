import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Box, Button, FormControl, InputLabel, Typography } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';

function fontMedium(text) {
  return (
    <Box fontWeight='fontWeightMedium' display='inline'>{text}</Box>
  )
}

export default function SignUp() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 25,
          paddingLeft: 30,
          paddingRight: 30
        }}
      >
        <Typography component="h1" variant="h5" p={2}>
          Faça seu {fontMedium('Cadastro')} e aproveite o melhor de nossos {fontMedium('Coworkings')} 
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }} >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cpf"
                label="CPF"
                name="cpf"
                autoComplete="cpf"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="gender"
                label="Gênero"
                name="gender"
                autoComplete="gender"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Telefone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="dateBirth"
                label="Data de Nascimento"
                name="dateBirth"
                autoComplete="dateBirth"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="cep"
                label="CEP"
                name="cep"
                autoComplete="cep"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" sx={{width: "100%"}}>
                <InputLabel htmlFor="outlined-Estado-native-simple">Estado</InputLabel>
                <Select
                  required
                  
                  native
                  value={age}
                  onChange={handleChange}
                  label="Estado"
                  inputProps={{
                    name: 'Estado',
                    id: 'outlined-Estado-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>

            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" sx={{width: "100%"}}>
                <InputLabel htmlFor="outlined-Estado-native-simple">Cidade</InputLabel>
                <Select
                  required
                  native
                  value={age}
                  onChange={handleChange}
                  label="cidade"
                  inputProps={{
                    name: 'cidade',
                    id: 'outlined-city-native-simple',
                  }}>

                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="district"
                label="Bairro"
                name="district"
                autoComplete="district"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="street"
                label="Rua"
                name="street"
                autoComplete="street"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="number"
                label="Número"
                name="number"
                autoComplete="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="complement"
                label="Complemento"
                name="complement"
                autoComplete="complement"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="passwordAgain"
                label="Repetir Senha"
                type="passwordAgain"
                id="passwordAgain"
                autoComplete="new-passwordAgain"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" direction="column">
            <Grid item>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 , width:200, borderRadius: 5}}>
                Cadastre-se
              </Button>
            </Grid>
            <Grid item>
              <Link href="/Site/signIn" variant="body2" style={{ fontSize: "110%" ,textDecoration: 'none' }}>
                Já tenho uma conta
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}