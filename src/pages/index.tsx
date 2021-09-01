import React from 'react';
import Head from 'next/head'
import { Banner } from '../components/Banner';
import { Container } from '../components/Container';
import styles from '../styles/pages/index.module.scss';

export default function index() {
  return (
    <React.Fragment>
      <Head>
        <title>traba.io | Seu escritório em qualquer lugar </title>
      </Head>
      <Banner />
      <section className={styles.bannerDetails}>
        <img src="/logos/logo-black.png" alt="Trabaio" />
        <p>Trazendo o conforto do escritorio para perto de você, com um preço que você nunca viu</p>
        <button>Descubra nossos escritorios</button>
      </section>
      <section className={styles.cooworkDetails}>
        <Container>
          <div className={styles.cooworkDetailsHeader}>
            <h1>Como são os escritorios?</h1>
            <p>Nossos escritorios conseguem atender todas as suas necessidades</p>
          </div>
          <article>
            <div className={styles.cooworkDetailsCard}>
              <img src="./icons/globe.png" alt="Globo" />
              <h3>Estão em todos os lugares</h3>
              <span>Temos escritorios em diversos lugares sempre perto de você</span>
            </div>
            <div className={styles.cooworkDetailsCard}>
              <img src="./icons/desk.png" alt="Mesa" />
              <h3>Com os melhores equipamentos</h3>
              <span>Equipamentos e infraestrutura de qualidade para você trabalhar</span>
            </div>
            <div className={styles.cooworkDetailsCard}>
              <img src="./icons/paper.png" alt="Papel" />
              <h3>Agendamento sem burocracia</h3>
              <span>Agendamentos fáceis e rapidos para quando precisar</span>
            </div>
          </article>
        </Container>
      </section>

      <section className={styles.cooworkRanking}>
        <Container>
          <div className={styles.cooworkRankingHeader}>
            <h1>Opiniões de nossos clientes</h1>
            <p>Alguns dos comentarios de nossos clientes</p>
          </div>
          <article>
            <div className={styles.cooworkRankingCard}>
              <img src="./persons/girl1.png" alt="Garota" />
              <img src="./assets/stars.png" alt="Estrelas" />
              <h3>“Eu Amei! Nunca pensei que trabalhar em um lugar assim fosse tão confortavél”</h3>
              <span>Luiza</span>
            </div>
            <div className={styles.cooworkRankingCard}>
              <img src="./persons/man1.png" alt="Garota" />
              <img src="./assets/stars5.png" alt="Estrelas" />
              <h3>“Eu recomendo para qualquer um que precise de um pouco mais de produtividade no dia a dia”</h3>
              <span>Eduardo</span>
            </div>
            <div className={styles.cooworkRankingCard}>
              <img src="./persons/girl2.png" alt="Garota" />
              <img src="./assets/stars.png" alt="Estrelas" />
              <h3>“Me sinto super focada e motivada em um lugar assim”</h3>
              <span>Marta</span>
            </div>
          </article>
        </Container>
      </section>
    </React.Fragment>
  )
}