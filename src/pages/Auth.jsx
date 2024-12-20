import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import AuthToggle from '../components/AuthToggle';
import SignInButton from '../components/SignInButton';
import { Github, GitlabIcon as GitlabLogo, Box, Key } from 'lucide-react';

const Auth = () => {
  const [authType, setAuthType] = useState('saas');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = (provider) => {
    // Simulate authentication
    login({
      name: 'UtkarshDhairyaPanwar',
      provider: provider
    });
    navigate('/');
  };

  const saasProviders = [
    { icon: Github, name: 'Github' },
    { icon: Box, name: 'Bitbucket' },
    { icon: Box, name: 'Azure Devops' },
    { icon: GitlabLogo, name: 'GitLab' },
  ];

  const selfHostedProviders = [
    { icon: GitlabLogo, name: 'Self Hosted GitLab' },
    { icon: Key, name: 'SSO' },
  ];

  const providers = authType === 'saas' ? saasProviders : selfHostedProviders;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:flex lg:w-1/2 p-8 items-center justify-center bg-white">
        <div className="h-[90vh] w-fit">
          <img 
            src="./login.png" 
            alt="CodeAnt AI Platform" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-md">
          <Logo />
          
          <h2 className="text-2xl font-bold text-center">
            Welcome to CodeAnt AI
          </h2>

          <AuthToggle selected={authType} onChange={setAuthType} />

          <div className="space-y-3">
            {providers.map((provider) => (
              <SignInButton
                key={provider.name}
                icon={provider.icon}
                provider={provider.name}
                onClick={() => handleSignIn(provider.name)}
              />
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
      </div>
    </div>
  );
};

export default Auth;

