import Image from 'next/image';
import '@/styles/globals.css';

import ProfilePhoto from '@/assets/Me.jpg';
import { NavButton } from '@/components/button';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-r from-background to-background-dark h-screen"
      // className={`bg-[url(../assets/Wallpaper.webp)] bg-repeat bg-24`}
    >
      <body className="m-auto max-w-4xl p-4 h-screen">
        <header className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full object-contain"
              src={ProfilePhoto}
              alt="Me"
              width={50}
              height={50}
            />
            <h1 className="text-secondary">Sina Akbari</h1>
          </div>
          <nav aria-label="Main navigation">
            <ul className="flex gap-4">
              <NavButton text="About Me" href="/" />
              <NavButton text="Projects" href="/projects" />
              <NavButton text="Resume" href="/resume" />
              <NavButton text="Education" href="/education" />
              <NavButton text="Contact Me" href="/contact" />
            </ul>
          </nav>
        </header>
        <main className="py-4">{children}</main>
      </body>
    </html>
  );
}
