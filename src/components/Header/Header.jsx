import React, {useState, useEffect} from "react";
import classNames from "classnames";

import {Modal} from "./Modal";
import {ModalAut} from "./ModalAut";
import {NavLink} from "react-router-dom";

import style from './Header.module.scss';
import logoHeader from '../../assets/image/logo/logoHeader.png';
import logPeople from '../../assets/image/logPeople.png';
import basket from '../../assets/image/basket.png';
import ellipse from '../../assets/image/ellipse.png';



export const Header = ({user, setOwner, logout, number}) => {

    const [modalActive, setModalActive] = useState(true);
    const [modalAutActive, setModalAutActive] = useState(true);
    // const [number, setNumber] = useState(JSON.parse(localStorage.getItem("cart")).length);

    return (
        <header className={style.header}>
            <div className={style.containerHeader}>
              {/* {user ?
                <div className={classNames(style.container, style.containerLog)}>
                  <img
                    className={style.logoHeader}
                    src={logoHeader}
                    alt="logo"
                  />
                </div>
              :
                <div className={style.container}>
                  <img
                    className={style.logoHeader}
                    src={logoHeader}
                    alt="logo"
                  />
                </div>
              } */}
                <div className={style.container}>
                  <img
                    className={style.logoHeader}
                    src={logoHeader}
                    alt="logo"
                  />
                </div>
                <div className={style.fff}>
                  <div className={style.container}>
                      <img
                        className={style.logPeople}
                        src={logPeople}
                        alt="logPeople"
                      />
                    {user ?
                      <div className={style.loginOn}>
                        <p className={style.loginName}>{user}</p>
                        <button
                          onClick={logout}
                          className={style.loginOut}>Выйти</button>
                      </div>
                      :
                      <div className={style.login}>
                        <button onClick={() => setModalActive(true)}>Регистрация</button>
                        <p className={style.authorization}>/</p>
                        <button onClick={() => setModalAutActive(true)}>Вход</button>
                      </div>
                    }
                  </div>
                  <div className={style.container}>
                      <img className={style.basket} src={basket} alt="logo"/>
                      <div className={style.basketNum}>
                          <img className={style.ellipse} src={ellipse} alt="logPeople"/>
                          <p className={style.number}>{number}</p>
                      </div>
                    <NavLink
                      className={style.basketName}
                      to={"/Basket"}
                    >Корзина</NavLink>
                  </div>
                </div>
            </div>
            <Modal
              active={modalActive}
              setActive={setModalActive}
            />
            <ModalAut
              active={modalAutActive}
              setActive={setModalAutActive}
              setOwner={setOwner}
            />
        </header>
    )
}

