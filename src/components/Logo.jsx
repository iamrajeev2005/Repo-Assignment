const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
          fill="#000"
        />
      </svg>
      <span className="text-xl font-semibold">CodeAnt AI</span>
    </div>
  );
};

export default Logo;

