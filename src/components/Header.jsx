import { Menu } from 'lucide-react';
import Logo from './Logo';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b bg-white md:hidden">
      <Logo size="small" />
      <button 
        onClick={onMenuToggle}
        className="p-2"
      >
        <Menu className="h-6 w-6" />
      </button>
    </header>
  );
};

export default Header;

