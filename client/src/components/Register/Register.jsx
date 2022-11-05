import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Register() {
  return (
    <Form className='container col-4 mt-5'>
      <h3 className='text-center mb-2'>Регистрация пользователя</h3>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='email'
          placeholder='Введите email'
          className='text-center'
        />
        <Form.Text className='text-muted'></Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Введете пароль'
          className='text-center'
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formVerifyPassword'>
        <Form.Control
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
