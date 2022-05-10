import Head from 'next/head';
import BlogCard from '../components/BlogCard';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import { Heading3 } from '../components/Typography';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navigation />
      <main>
        <HeroSection />
        <div className="h-min-screen w-full bg-slate-100 px-4 py-3">
          <Heading3 className="mb-3">Latest Posts</Heading3>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <li key={item} className="mb-3">
                <BlogCard key={item} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
