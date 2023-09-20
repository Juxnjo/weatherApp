import { Container, Typography } from "@mui/material";

const App = () =>
{
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

    </Container>
  )
}

export default App