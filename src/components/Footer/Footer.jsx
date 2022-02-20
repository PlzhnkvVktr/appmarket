import React from "react";

import style from "./Footer.module.scss";
import logoHeader from "../../assets/image/logo/logoHeader.png";

export const Footer = () => {
    return (
      <footer className={style.footer}>
        <div className={style.containerFooter}>
          <div className={style.containerLogo}>
            <img src={logoHeader} alt="logo"/>
          </div>
          <div className={style.containerConnect}>
            <div className={style.container}>
              <a href='#'>Instagram</a>
            </div>
            <div className={style.container}>
              <a href='#'>VK</a>
            </div>
            <div className={style.container}>
              <a href='#'>Twitter</a>
            </div>
            <div className={style.container}>
              <a href='#'>Facebook</a>
            </div>
            <div className={style.container}>
                <a href='#'>Email</a>
              </div>
            </div>
          </div>
          <div className={style.footerTrademark}>
            <p>© 2022 Учебный проект. Виктор.</p>
          </div>
      </footer>
    )
}
