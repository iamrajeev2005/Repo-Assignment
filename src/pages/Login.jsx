'use client'

import { useState } from 'react';
import AuthLayout from '../components/AuthLayout';

const Login = () => {
  const [authType, setAuthType] = useState('saas');

  const providers = [
    {
      name: 'GitHub',
      icon: 'github',
      onClick: () => console.log('GitHub login'),
    },
    {
      name: 'Bitbucket',
      icon: 'bitbucket',
      onClick: () => console.log('Bitbucket login'),
    },
    {
      name: 'Azure Devops',
      icon: 'azure',
      onClick: () => console.log('Azure login'),
    },
    {
      name: 'GitLab',
      icon: 'gitlab',
      onClick: () => console.log('GitLab login'),
    },
  ];

  return (
    <AuthLayout>
      <div className="space-y-6">
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
          {providers.map((provider) => (
            <button
              key={provider.name}
              onClick={provider.onClick}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="w-5 h-5">
                {/* Icon placeholder - replace with actual icons */}
                <div className="w-5 h-5 bg-gray-400 rounded-full" />
              </span>
              Sign in with {provider.name}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-gray-600">
          By signing up you agree to the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;

