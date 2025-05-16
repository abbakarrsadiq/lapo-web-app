import React from 'react';
import Icon from '../side-bar/Icon';

const QuickAccess: React.FC<{ quickAccessItems: { label: string; icon: string; badge?: number }[] }> = ({ quickAccessItems }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm" style={{ padding: '20px', background: '#FFFFFF', border: '1px solid #E2E2E2', borderRadius: '8px' }}>
      <h2
        className="text-base font-medium text-gray-900 mb-4"
        style={{ fontFamily: 'Satoshi', fontWeight: 500, fontSize: '16px', lineHeight: '18px', color: '#121212', marginBottom: '15px' }}
      >
        Your Quick Access
      </h2>
      <div className="flex gap-2" style={{ gap: '8px', width: '1138px', height: '45px' }}>
        {quickAccessItems.map((item, index) => (
          <button
            key={index}
            className="flex items-center w-1/4 h-11 px-4 bg-[#F1F7FF] border border-gray-300 rounded text-blue-600 text-sm hover:bg-blue-50 transition-colors"
            style={{ color: '#2B6CB0', fontSize: '14px', lineHeight: '18px', borderRadius: '4px', border: '1px solid #E2E8F0', }}
          >
            <span className="flex items-center gap-2 ml-3" style={{gap: '8px'}}>
              <Icon name={item.icon} size={28} />
              {item.label}
            </span>
            <span className="flex items-center gap-4" style={{gap: '8px'}}>
              <Icon name="rightIcon" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
