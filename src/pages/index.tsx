import Head from 'next/head';
import HomeLayout from '@/modules/home/HomeLayout';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Jots Resume Builder 3000</title>
        <meta name="description" content="Single Page Resume Builder" />
      </Head>

      <HomeLayout />
    </div>
  );
}

export default HomePage;
