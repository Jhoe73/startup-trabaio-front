import React from 'react';
import Link from 'next/link'
import { Button } from '@material-ui/core';
import styles from './styles.module.scss';

export default function Header(){
  return(
    <React.Fragment>
      <header className={styles.navbar}>
        <nav>
          <Link href="/">
            <img src="/logos/logo-white.png" alt="Trabaio" />
          </Link>
          <div className={styles.options}>
            <Link href="/site/places" passHref>
              <div><span>Buscar Espaços</span></div>
            </Link>
            <Link href="#" passHref>
              <div><span>Quero Participar</span></div>
            </Link>
            <Link href="/site/pricing" passHref>
              <div><span>Planos</span></div>
            </Link>
          </div>
          <Link href="/site/signIn" passHref>
            <Button variant="contained" color="primary" className={styles.login} >Login</Button>
          </Link>
          </nav>
        </header>
    </React.Fragment>
  )
}