import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  let [email, setEmail] = React.useState("");
  let [passw, setPassw] = React.useState("");

  function outForm(e) {
    e.preventDefault();
    console.log(email, passw);
    setEmail = setEmail("");
    setPassw = setPassw("");
  }

  function inputEmail(e) {
    const email = document.getElementById("formBasicEmail");
    setEmail = setEmail(email.value);
  }
  function inputPassword(e) {
    const password = document.getElementById("formBasicPassword");
    setPassw = setPassw(password.value);
  }

  return (
    <Form className='container col-4 mt-5' onSubmit={outForm}>
      <h3 className='text-center mb-2'>Вход</h3>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          value={email}
          onChange={inputEmail}
          type='email'
          placeholder='Enter email'
          className='text-center'
        />
        <Form.Text className='text-muted'></Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          value={passw}
          onChange={inputPassword}
          type='password'
          placeholder='Password'
          className='text-center'
        />
      </Form.Group>

      <Button className='btn btn-primary btn-sm' type='submit'>
        Вход
      </Button>
    </Form>
  );
}

export default Login;
