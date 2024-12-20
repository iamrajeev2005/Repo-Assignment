import { useState } from 'react';
import { Github, Gitlab, Box } from 'lucide-react';

const AuthScreen = ({ onLogin }) => {
  const [authType, setAuthType] = useState('saas');

  const handleAuth = (provider) => {
    console.log(`Authenticating with ${provider}`);
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center">
          <img src="/logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
          <span className="ml-2 text-xl font-semibold">CodeAnt AI</span>
        </div>
        
        <h2 className="text-2xl font-bold text-center">Welcome to CodeAnt AI</h2>

        <div className="flex rounded-lg bg-gray-100 p-1">
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              authType === 'saas'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setAuthType('saas')}
          >
            SAAS
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              authType === 'self-hosted'
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setAuthType('self-hosted')}
          >
            Self Hosted
          </button>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleAuth('github')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Github className="w-5 h-5" />
            Sign in with Github
          </button>
          <button
            onClick={() => handleAuth('gitlab')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Gitlab className="w-5 h-5" />
            Sign in with GitLab
          </button>
          <button
            onClick={() => handleAuth('bitbucket')}
            className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Box className="w-5 h-5" />
            Sign in with Bitbucket
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          By signing up you agree to the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthScreen;

