import { Box, Container, TextField, Typography } from "@mui/material";

const App = () =>
{

  const onSubmit = e => {
    e.preventDefault();
    console.log('ok')
  }

  return (
    <Container
      maxWidth='xs'
      sx={ { mt: 2 } }
    >
      <Typography
        variant='h3'
        component='h1'
        align="center"
        gutterBottom
      >
        Weather App

      </Typography>
      <Box
        sx={{display: 'grid', gap: 2}}
        component='form'
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
        />

      </Box>
    </Container>
  )
}

export default App