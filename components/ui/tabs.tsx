"use client"
import { useState } from 'react';

interface TabsProps {
  tabs: { name: string, content: JSX.Element }[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-sm py-2 px-4 focus:outline-none ${activeTab === index
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-500 hover:text-green-600'
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;