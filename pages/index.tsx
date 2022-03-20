import { GetServerSideProps } from 'next';

const Home = () => {
  return <div>Redirecting...</div>;
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
