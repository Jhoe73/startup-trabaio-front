import React from 'react';
import Link from 'next/link'
import { Button } from '@material-ui/core';
import styles from './styles.module.scss';

export function Header(){
  return(
    <React.Fragment>
      <header className={styles.navbar}>
        <nav>
          <Link href="/">
            <img src="/logos/logo-white.png" alt="Trabaio" />
          </Link>
          <div className={styles.options}>
            <Link href="/Site/places" passHref>
              <div><span>Buscar Espaços</span></div>
            </Link>
            <Link href="#" passHref>
              <div><span>Quero Participar</span></div>
            </Link>
            <Link href="/Site/pricing" passHref>
              <div><span>Planos</span></div>
            </Link>
          </div>
          <Link href="/Site/signIn" passHref>
            <Button variant="contained" color="primary" className={styles.login} >Login</Button>
          </Link>
          </nav>
        </header>
    </React.Fragment>
  )
}