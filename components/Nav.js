/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Btn from "./Btn";
import style from '../styles/Nav.module.css'
const Nav = () => (
  <div className={style.nav}>
    <img src='/static/js.jpg' className={style.logo}  alt="Logo"/>
    <Link href="/" passHref>
        <a>
      <Btn>Index</Btn>
      </a>
    </Link>
    <Link href="/second" passHref>
        <a>
      <Btn>Second</Btn>
      </a>
    </Link>
  </div>
);

export default Nav;
