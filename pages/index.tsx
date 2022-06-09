import Head from 'next/head';
import BlogCard from '../components/BlogCard';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import { Heading3 } from '../components/Typography';

export default function Home() {
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
