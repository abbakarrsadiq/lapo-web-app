import React from 'react';
import Card from './card';
import MonthlyIssuanceChart from './monthly-issuance-chart';
import RecentCardRequestsTable from './recent-card-requests';
import WeeklyIncomeChart from './weekly-income-chart';
import CardStatusDistributionChart from './card-status-distribution';
import type { IconName } from '../../side-bar/Icon';

const Analytics: React.FC = () => {
  const analyticsData = {
    totalActiveCards: 26478,
    totalPersonalizedCards: 15703,
    todaysRevenue: '9.3M',
    pendingRequests: 38,
    monthlyIssuance: [
      { month: 'May', personalized: 20, instant: 40 },
      { month: 'Jun', personalized: 10, instant: 30 },
      { month: 'Jul', personalized: 15, instant: 50 },
      { month: 'Aug', personalized: 25, instant: 60 },
      { month: 'Sep', personalized: 30, instant: 70 },
      { month: 'Oct', personalized: 20, instant: 40 },
      { month: 'Nov', personalized: 35, instant: 80 },
    ],
    recentCardRequests: [
      { branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready' },
      { branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'InProgress' },
      { branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'Acknowledged' },
      { branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Pending' },
    ],
    cardStatusDistribution: { active: 1470, expired: 368, inactive: 245, blocked: 245, lost: 123 },
    weeklyIncome: [30, 90, 20, 100, 40]
  };
  interface CardItem {
    title: string;
    value: string | number;
    percentage: string;
    trendText: string;
    icon: IconName;
  }
  const cardData: CardItem[] = [
    { title: 'Total Active Cards', value: analyticsData.totalActiveCards.toLocaleString(), percentage: '+9%', trendText: 'this month', icon: 'creditCardCheck' },
    { title: 'Total Personalized Cards', value: analyticsData.totalPersonalizedCards.toLocaleString(), percentage: '+8.5%', trendText: 'this month', icon: 'creditCardEdit' },
    { title: 'Today\'s Revenue', value: `₦${analyticsData.todaysRevenue}`, percentage: '+6%', trendText: 'vs yesterday', icon: 'bankNoteIcon' },
    { title: 'Pending Requests', value: analyticsData.pendingRequests, percentage: '', trendText: 'Requires attention', icon: 'pendingIcon' },
  ];

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center" style={{ color: '#000000' }}>
        Analytics
        <hr style={{
          border: '0.38px solid #D0D5DD',
          width: '100%',
          borderWidth: '0.38px',
          marginLeft: '12px'
        }} />

      </h2>

      <div className="grid grid-cols-4 gap-6 mb-8 my-6" style={{ padding: '18px 0' }}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            value={card.value}
            percentage={card.percentage}
            trendText={card.trendText}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        <div className="bg-white p-4 rounded shadow" style={{ margin: '1%' }}>
          <MonthlyIssuanceChart data={analyticsData.monthlyIssuance} />
        </div>
        <div className="bg-white p-4 rounded shadow" style={{ margin: '1%' }}>
          <RecentCardRequestsTable data={analyticsData.recentCardRequests} />
        </div>
        <div className="bg-white p-4 rounded shadow" style={{ margin: '1%' }}>
          <WeeklyIncomeChart data={analyticsData.weeklyIncome} />
        </div>
        <div className="bg-white rounded shadow" style={{ margin: '1%' }}>
          <CardStatusDistributionChart data={analyticsData.cardStatusDistribution} />
        </div>
      </div>
    </div>

  );
};

export default Analytics;
