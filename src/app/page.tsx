import Image from 'next/image';

import HeroImage from '@/assets/Hero.webp';
import { Button } from '@/components/button';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-16 shadow-neu-pressed py-12">
      <Image
        className="max-h-60 max-w-60 object-contain rounded-full p-4 bg-background shadow-neu-base hover:scale-105 transition-transform duration-300"
        src={HeroImage}
        alt="Vercel Logo"
      />
      <div className="flex flex-col items-center justify-center max-w-2xl text-center p-4 rounded-lg">
        <p className="text-2xl text-secondary">Hey</p>
        <h1 className="text-4xl text-primary mt-3">I&apos;m Sina Akbari</h1>
        <h1 className="text-2xl text-primary">
          Frontend Software <span className="text-tertiary">Engineer</span>
        </h1>
        <p className="text-base text-secondary mt-3">
          TypeScript enjoyer, problem solver, and code deployer. I build sleek,
          performant user interfaces with React, and I&apos;m currently diving
          into Rust. Welcome to my cozy corner of the web!
        </p>
        <div className="flex gap-4 items-center mt-8">
          <Button>About Me</Button>
          <Button>Contact Me</Button>
        </div>
      </div>
    </div>
  );
}
