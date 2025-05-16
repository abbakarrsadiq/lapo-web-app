import React from 'react';
import Icon, { type IconName } from '../../side-bar/Icon';

interface CardProps {
  icon: IconName;
  title: string;
  value: string | number;
  percentage?: string;
  trendColor?: string;
  trendText?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, value, percentage, trendText, className }) => {
  return (
    <div className={`bg-white flex flex-col justify-between p-4 ${className}`} style={{ width: '286.5px', maxHeight: '130px', padding: '12px', borderRadius: '10px', border: '1px solid #E2E2E2', background: '#FFFFFF' }}>
      <Icon name={icon} size={16} />
      <h3 className="text-xs text-gray-500" style={{ color: 'rgba(0, 0, 0, 0.56)', lineHeight: '14px', marginBottom: '4px' }}>{title}</h3>
      <div className='flex flex-row items-center justify-between' style={{ margin: '0', padding: '0' }}>
        <p className="" style={{ fontWeight: '700', fontSize: '24px', color: '#121212', lineHeight: '28px' }}>{value}</p>
        {trendText && (
          <div className="flex flex-row items-center" style={{ whiteSpace: 'nowrap' }}>
            {percentage ? (
              <p style={{ backgroundColor: '#EFFAF6', color: '#29A174', width: '68px', height: '20px', fontWeight: '400', fontSize: '12px', lineHeight: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={trendText === "Requires attention" ? "attentionIcon" : "arrowUpIcon"} />
                {percentage}
              </p>
            ) : (
              <Icon name={trendText === "Requires attention" ? "attentionIcon" : "arrowUpIcon"}/>
            )}
            <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', marginLeft: '4px', color: trendText === 'Requires attention' ? '#E78020' : 'rgba(0, 0, 0, 0.56)' }}>
              {trendText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
