import { Home, Code, Cloud, Book, Settings, HelpCircle, LogOut } from 'lucide-react';

const MenuItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm ${
      isActive ? 'bg-gray-100' : ''
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="p-2 border-b">
        <button className="w-full px-3 py-2 text-left text-sm border rounded-lg bg-gray-50 flex items-center justify-between">
          <span>UtkarshDhairyaPanwar</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col">
        <MenuItem icon={Home} label="Repositories" isActive={true} />
        <MenuItem icon={Code} label="AI Code Review" />
        <MenuItem icon={Cloud} label="Cloud Security" />
        <MenuItem icon={Book} label="How to Use" />
        <MenuItem icon={Settings} label="Settings" />
        <MenuItem icon={HelpCircle} label="Support" />
        <MenuItem icon={LogOut} label="Logout" />
      </nav>
    </div>
  );
};

export default MobileMenu;

