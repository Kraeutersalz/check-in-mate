import { GetStaticProps, NextPage } from 'next';
import Head from 'next/Head';
import styles from '../styles/Home.module.css';
import { Character, GetCharacterResults } from '../types/rickAndMortyTypes';


const HomePage: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Check Duo</title>
        <meta name="Check Duo" content="It couldn't be easier to find your teammates " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Find your mate</h1>
      {characters.map((character) => {
        return <li key={character.id}>{character.name}</li>;
      })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/')
  const { results } = await res.json()
  return {
    props: {
      characters: results,
    },
  };
};

export default HomePage;
