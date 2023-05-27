import React, { useState } from 'react';

const Tabs = ({ tabs, renderContent }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 focus:outline-none ${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default Tabs;
