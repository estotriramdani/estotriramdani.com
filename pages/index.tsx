import { GetServerSideProps } from 'next';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Esto Triramdani N - a software engineer</title>
        <meta
          name="description"
          content="Esto Triramdani is a software engineer"
        />
      </Head>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/portfolios',
      permanent: false,
    },
  };
};

export default Home;
