import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkState = ({ isActive }) =>
    isActive ? "nav-link px-2 text-secondary" : "nav-link px-2 text-white";

  return (
    <header className='p-3 text-bg-dark'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <NavLink to='/' className={linkState}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to='/news' className={linkState}>
                Новости
              </NavLink>
            </li>
            <li>
              <NavLink to='/posts' className={linkState}>
                Объявления
              </NavLink>
            </li>
            <li>
              <NavLink to='/warn' className={linkState}>
                Важное
              </NavLink>
            </li>
            <li>
              <NavLink to='/contacts' className={linkState}>
                Контакты
              </NavLink>
            </li>
          </ul>

          <div className='text-end'>
            <NavLink
              to='/login'
              type='button'
              className='btn btn-outline-light me-2 btn-sm'
            >
              Вход
            </NavLink>
            <NavLink
              to='/register'
              type='button'
              className='btn btn-warning btn-sm'
            >
              Регистрация
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
