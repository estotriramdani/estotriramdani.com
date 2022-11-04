import Head from 'next/head';
import useSWR from 'swr';
import { fetchAPI, swrArgs } from '../services/fecth';

export default function Home() {
  const url =
    'http://ec2-13-228-28-71.ap-southeast-1.compute.amazonaws.com:5000/notes';
  const args = swrArgs(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const { data, error } = useSWR(args, fetchAPI, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="flex h-screen w-full flex-col items-center justify-center bg-gray-800">
        <div>
          <h1 className="font-mono text-4xl text-white">
            Updated{' '}
            <span className="underline underline-offset-8">really soon!</span>
          </h1>
        </div>
      </main>
    </>
  );
}
