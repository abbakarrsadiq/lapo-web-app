import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CardStatusDistributionProps {
  data: { active: number; expired: number; inactive: number; blocked: number; lost: number };
}

const CardStatusDistributionChart: React.FC<CardStatusDistributionProps> = ({ data }) => {
  const totalCards = Object.values(data).reduce((sum, value) => sum + value, 0);
  const chartData = {
    labels: ['Active', 'Expired', 'Inactive', 'Blocked', 'Lost'],
    datasets: [
      {
        data: [data.active, data.expired, data.inactive, data.blocked, data.lost],
        backgroundColor: ['#38B2AC', '#F6AD55', '#4C51BF', '#9F7AEA', '#E53E3E'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#2D3748',
        titleFont: { size: 12, family: "'Inter', sans-serif" },
        bodyFont: { size: 12, family: "'Inter', sans-serif" },
        padding: 8,
        cornerRadius: 4,
      },
    },
  };

  const statusLabels = [
    { label: 'Active', color: '#38B2AC' },
    { label: 'Expired', color: '#F6AD55' },
    { label: 'Inactive', color: '#4C51BF' },
    { label: 'Blocked', color: '#9F7AEA' },
    { label: 'Lost', color: '#E53E3E' },
  ];

  return (
    <div
      className="bg-white border border-[#E2E2E2] rounded-lg"
      style={{ height: '280px', backgroundColor: '#FFFFFF' }}
    >
      <p
        className="text-left mb-4"
        style={{
          fontFamily: "'Satoshi', sans-serif",
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '18px',
          color: '#121212',
          paddingLeft: '18px',
          paddingRight: '18px',
        }}
      >
        Card Status Distribution
      </p>

      <div
        className="relative mx-auto"
        style={{
          width: '210px',
          height: '160px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Doughnut data={chartData} options={options} />
        <div
          className="absolute text-center"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <p className="text-2xl font-semibold text-gray-800">{totalCards.toLocaleString()}</p>
          <p className="text-xs text-gray-500 font-inter">Total Cards</p>
        </div>
      </div>

      <div
        className="w-full text-xs text-gray-500 font-inter flex justify-around mt-4"
        style={{ paddingLeft: '18px', paddingRight: '18px' }}
      >
        {statusLabels.map((status) => (
          <div key={status.label} className="flex items-center">
            <span
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: status.color,
                borderRadius: '2px',
                display: 'inline-block',
                marginRight: '4px',
              }}
            ></span>
            <span>{status.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStatusDistributionChart;
