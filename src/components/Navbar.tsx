import Link from "next/link";
import { site } from "@/data/site";

export function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <span>{site.handle}</span>
        </Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
      </div>
      <div>
        <Link href={site.links.github}>GitHub</Link>
        <Link href={site.links.resume}>Resume</Link>
      </div>
    </nav>
  );
}
