import { useState } from 'react';
import { Home, Code, Cloud, Book, Settings, HelpCircle, LogOut, X } from 'lucide-react';
import Logo from './Logo';

const MenuItem = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium ${
      isActive 
        ? 'text-white bg-blue-600' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

const Sidebar = ({ isOpen, onClose, className }) => {
  const [activeItem, setActiveItem] = useState('repositories');

  const menuItems = [
    { id: 'repositories', label: 'Repositories', icon: Home },
    { id: 'ai-review', label: 'AI Code Review', icon: Code },
    { id: 'security', label: 'Cloud Security', icon: Cloud },
    { id: 'how-to-use', label: 'How to Use', icon: Book },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const sidebarContent = (
    <>
      <div className="p-4 border-b flex justify-between items-center">
        <Logo size="small" />
        <button onClick={onClose} className="md:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4">
        <button className="w-full px-3 py-2 text-left text-sm border rounded-lg bg-gray-50 flex items-center justify-between">
          <span>UtkarshDhairyaPanwar</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </nav>

      <div className="border-t">
        <MenuItem icon={HelpCircle} label="Support" />
        <MenuItem onClick={() => window.location.reload()} icon={LogOut} label="Logout" />
      </div>
    </>
  );

  return (
    <>
      {/* Mobile sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
          <div className="absolute top-0 w-full  bg-white">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className={`hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-64 bg-white border-r ${className}`}>
        {sidebarContent}
      </div>
    </>
  );
};

export default Sidebar;

