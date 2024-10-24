"use client"
import { useState } from 'react';

interface TabsProps {
  tabs: { name: string, content: JSX.Element }[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b overflow-y-auto space-x-4 max-h-20">
        {
          tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 italic whitespace-nowrap focus:outline-none ${activeTab === index
                ? 'border-b-2 border-green-400 text-green-400'
                : 'opacity-50'
                }`}
            >
              {tab.name}
            </button>
          ))
        }
      </div>
      <div className="flex flex-col gap-4 p-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;