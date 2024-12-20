const AuthToggle = ({ selected, onChange }) => {
    return (
      <div className="flex rounded-lg bg-gray-100 p-1">
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            selected === 'saas'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onChange('saas')}
        >
          SAAS
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            selected === 'self-hosted'
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onChange('self-hosted')}
        >
          Self Hosted
        </button>
      </div>
    );
  };
  
  export default AuthToggle;
  
  