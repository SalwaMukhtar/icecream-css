// components/Header.tsx
import Link from 'next/link';


const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">Ice Cream Paradise</Link>
        </div>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
