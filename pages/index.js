import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('metaTitle')}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}> {t('title')} </h1>
        <p className={styles.description}> {t('description')}
        </p>

        <div class='botonera'>
          <Link href="/" locale="es">
            <a>
              <button> Español </button>
            </a>
          </Link>
          <Link href="/" locale="en">
            <a>
              <button> English </button>
            </a>
          </Link>
          <Link href="/" locale="br">
            <a>
              <button> Português </button>
            </a>
          </Link>
          
        </div>
      </main>
    </div>
  );
}

export default Home