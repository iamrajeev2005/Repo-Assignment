import { useState } from 'react';
import { Search, RefreshCw, Plus, X } from 'lucide-react';
import RepositoryCard from './RepositoryCard';
import AddRepositoryForm from './AddRepositoryForm';



const RepositoryList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [repositories, setRepositories] = useState([
    {
      name: 'design-system',
      language: 'React',
      size: '7320',
      visibility: 'Public',
      updatedAt: '1 day ago'
    },
    {
      name: 'codeant-ci-app',
      language: 'Javascript',
      size: '5871',
      visibility: 'Private',
      updatedAt: '2 days ago'
    },
    {
      name: 'analytics-dashboard',
      language: 'Python',
      size: '4521',
      visibility: 'Private',
      updatedAt: '5 days ago'
    },
    {
      name: 'mobile-app',
      language: 'Swift',
      size: '3096',
      visibility: 'Public',
      updatedAt: '3 days ago'
    }
  ]);

  const handleAddRepository = (newRepo) => {
    setRepositories([newRepo, ...repositories]);
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-sm text-gray-600">{repositories.length} total repositories</p>
        </div>
        <div className="flex gap-2">
          <button 
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-50 flex items-center gap-2 bg-white"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="w-4 h-4" />
            Refresh All
          </button>
          <button 
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
            onClick={() => setShowAddForm(true)}
          >
            <Plus className="w-4 h-4" />
            Add Repository
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="search"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4">
        {filteredRepositories.map((repo) => (
          <RepositoryCard key={repo.name} {...repo} />
        ))}
      </div>

      {showAddForm && (
        <AddRepositoryForm
          onSubmit={handleAddRepository}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};

export default RepositoryList;

