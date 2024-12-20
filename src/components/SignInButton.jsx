const SignInButton = ({ icon: Icon, provider, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span>Sign in with {provider}</span>
      </button>
    );
  };
  
  export default SignInButton;
  
  