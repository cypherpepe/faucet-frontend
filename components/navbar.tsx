import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface IconLinkProps {
  src: string;
  href: string;
  name: string;
}

const IconLink = ({ src, href, name }: IconLinkProps) => {
  return (
    <Link href={href}>
      <Image src={src} alt={`${name} Logo`} width={24} height={24} priority className="w-[30px] h-6" />
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="flex w-full p-0 lg:p-8">
      <ul className="flex flex-row justify-between items-center w-full">
        <li>
          <Link
            className="pointer-events-none flex place-items-center gap-2 py-6 lg:py-8 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src="/assets/kakarot-logo.svg"
              alt="Kakarot Logo"
              className="dark:invert"
              width={137}
              height={40}
              priority
            />
          </Link>
        </li>
        <li className="sm:inline-flex flex-row items-center space-x-6 hidden">
          <IconLink src="/assets/x-icon.svg" href="https://x.com" name="X" />
          <IconLink src="/assets/discord-icon.svg" href="https://discord.com" name="Discord" />
          <IconLink src="/assets/farcaster-icon.svg" href="https://farcaster.xyz/" name="Farcaster" />
          <Link href="/">
            <Button className="space-x-2" variant="reverse" size="withIcon">
              <span>Read Docs</span>
              <Image src="/assets/docs-icon.svg" alt="Docs" width={16} height={16} />
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
