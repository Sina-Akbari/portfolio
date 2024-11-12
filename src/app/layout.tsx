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
    <html lang="en">
      <body className="m-auto max-w-3xl p-4 h-screen">
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
              <NavButton text="Home" href="/" />
              <NavButton text="About" href="/about" />
              <NavButton text="Services" href="/services" />
              <NavButton text="Contact" href="/contact" />
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
