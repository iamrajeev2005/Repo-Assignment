import { useState } from 'react';
import { X } from 'lucide-react';

const AddRepositoryForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    language: 'React',
    size: '',
    visibility: 'Public'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      updatedAt: 'just now'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Repository</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Repository Name
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
            >
              <option>React</option>
              <option>Javascript</option>
              <option>Python</option>
              <option>Swift</option>
              <option>Java</option>
              <option>HTML/CSS</option>
              <option>PHP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Size (KB)
            </label>
            <input
              type="number"
              required
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visibility
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.visibility}
              onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Repository
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRepositoryForm;

