import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from '@/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Builder</title>
        <meta name="description" content="Single Page Resume Builder" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
