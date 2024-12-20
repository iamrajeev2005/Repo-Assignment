import { useState } from 'react';

const languageColors = {
  React: 'bg-blue-500',
  Javascript: 'bg-yellow-400',
  Python: 'bg-blue-600',
  Swift: 'bg-orange-500',
  Java: 'bg-red-500',
  'HTML/CSS': 'bg-purple-500',
  PHP: 'bg-indigo-500'
};

const RepositoryCard = ({ name, language, size, visibility, updatedAt }) => {
  return (
    <div className="border rounded-lg p-4 hover:border-gray-300 transition-colors bg-white">
      <div className="flex items-center justify-start gap-3 mb-2">
        <h3 className="text-[15px] font-medium text-gray-900">{name}</h3>
        <span className={`px-2 py-0.5 text-xs rounded-full ${
          visibility === 'Public' 
            ? 'bg-blue-50 text-blue-700' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {visibility}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600">
        <div className="flex items-center gap-1.5">
          {language}
          <span className={`w-2 h-2 rounded-full ${languageColors[language]}`}></span>
        </div>
        <div>{size} KB</div>
        <div>Updated {updatedAt}</div>
      </div>
    </div>
  );
};

export default RepositoryCard;

