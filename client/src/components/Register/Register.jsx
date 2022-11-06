import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  let [email, setEmail] = React.useState("");
  let [passw, setPassw] = React.useState("");
  let [check_passw, setCheckPassw] = React.useState("");

  function checkPassword() {
    const result = passw === check_passw ? true : false;
    return console.log(result);
  }

  function outForm(e) {
    e.preventDefault();
    console.log(email, passw, check_passw);
    checkPassword();
    // setEmail = "";
    // setPassw = "";
    // setCheckPassw = "";
  }

  function inputEmail(e) {
    const email = document.getElementById("formBasicEmail");
    setEmail = setEmail(email.value);
  }
  function inputPassword(e) {
    const password = document.getElementById("formBasicPassword");
    setPassw = setPassw(password.value);
  }
  function inputCheckPassword() {
    const password_check = document.getElementById("formCheckPassword");
    setCheckPassw = setCheckPassw(password_check.value);
  }

  return (
    <Form className='container col-4 mt-5' onSubmit={outForm}>
      <h3 className='text-center mb-3'>Регистрация пользователя</h3>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          onChange={inputEmail}
          type='email'
          placeholder='Введите email'
          className='text-center'
        />
        <Form.Text className='text-muted'></Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          onChange={inputPassword}
          type='password'
          placeholder='Введете пароль'
          className='text-center'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formCheckPassword'>
        <Form.Control
          onChange={inputCheckPassword}
          type='password'
          placeholder='Повторите пароль'
          className='text-center'
        />
      </Form.Group>

      <Button className='btn btn-primary btn-sm' type='submit'>
        Регистрация
      </Button>
    </Form>
  );
}

export default Register;
