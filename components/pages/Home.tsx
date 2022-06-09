import React from 'react';
import BlogCard from '../BlogCard';
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';
import { Heading3 } from '../Typography';

export default function Home() {
  return (
    <>
      <Navigation />
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
    </>
  );
}
