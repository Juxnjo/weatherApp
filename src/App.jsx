import {  Container,  } from "@mui/material";
import { Head } from "./components/Head.jsx";
import { Copyright } from "./components/Copyright.jsx";
import { Form } from "./components/Form.jsx";

const App = () =>
{


  return (
    <Container className=""
      maxWidth='xs'
      sx={ { mt: 2 } }
    >
      <Head />
      <Form/>
      <Copyright />

    </Container>
  )
}

export default App