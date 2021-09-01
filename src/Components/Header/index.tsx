import React from 'react';
import Link from 'next/link'
import { Button } from '@material-ui/core';
import styles from './styles.module.scss';

export function Header(){
  return(
    <React.Fragment>
      <header className={styles.navbar}>
        <nav>
          <img src="./logo-white.png" alt="Trabaio" />
          <div className={styles.options}>
            <Link href="/Site/places" passHref>
              <span>Buscar Espaços</span>
            </Link>
            <Link href="#" passHref>
              <span>Quero Participar</span>
            </Link>
            <Link href="/Site/pricing" passHref>
              <span>Planos</span>
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