import Link from 'next/link';

interface NavButtonProps {
  text: string;
  href: string;
}

export const NavButton = ({ text, href }: NavButtonProps) => {
  return (
    <li className="flex text-primary items-center justify-center px-3 py-2 h-12 w-32 rounded-full cursor-pointer shadow-neu-base hover:shadow-neu-pressed">
      <Link href={href}>{text}</Link>
    </li>
  );
};
