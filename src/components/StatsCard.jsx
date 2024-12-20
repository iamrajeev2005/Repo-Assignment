const StatsCard = () => {
    return (
      <div className="space-y-6 p-6 bg-white rounded-2xl shadow-lg max-w-sm">
        <div className="flex items-center gap-2">
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
          <span className="text-lg font-semibold">AI to Detect & Autofix Bad Code</span>
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-xl font-bold">30+</div>
            <div className="text-sm text-gray-600">Language Support</div>
          </div>
          <div>
            <div className="text-xl font-bold">10K+</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div>
            <div className="text-xl font-bold">100K+</div>
            <div className="text-sm text-gray-600">Hours Saved</div>
          </div>
        </div>
  
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-blue-600 flex items-center gap-1">
                <span>↑ 14%</span>
                <span className="text-gray-500">This week</span>
              </div>
              <div className="text-lg font-bold">Issues Fixed</div>
              <div className="text-2xl font-bold">500K+</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StatsCard;
  
  