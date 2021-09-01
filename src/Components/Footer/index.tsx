import styles from './styles.module.scss';
import Link from 'next/link'

export function Footer() {
  return (
    <div className={styles.footer}>
      <footer>
        <hr className={styles.line} />
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logos/logo-white.png" alt="Trabaio" />
          </Link>
          <span>Seu escritorio em qualquer lugar</span>
        </div>
        <div className={styles.options}>
          <ul>
            <span>Para espaços</span>
            <li>Cadastre-se</li>
            <li>Beneficios</li>
          </ul>
          <ul>
            <span>Para clientes</span>
            <li>Planos</li>
            <li>Passe de afiliado</li>
            <li>Cadastre-se</li>
            <li>Beneficios</li>
          </ul>
          <ul>
            <span>Sobre</span>
            <li>Sobre nós</li>
            <li>Termos e condições</li>
            <li>Politica de privacidade</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}