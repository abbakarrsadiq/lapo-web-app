import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WeeklyIncomeChartProps {
  data: number[];
}

const WeeklyIncomeChart: React.FC<WeeklyIncomeChartProps> = ({ data }) => {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: data,
        borderColor: '#22C55E',
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 160);
          gradient.addColorStop(0, 'rgba(34, 197, 94, 0.2)');
          gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
          return gradient;
        },
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 12, family: "'Inter', sans-serif" },
          color: '#4A5568',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#EDF2F7',
        },
        ticks: {
          font: { size: 12, family: "'Inter', sans-serif" },
          color: '#4A5568',
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div
      className="bg-white rounded-xl mx-6 my-6"
      style={{ height: '224px', backgroundColor: '#FFFFFF', padding: '10px' }}
    >
      <p className="text-sm sm:text-base font-semibold text-black mb-2 sm:mb-4">This Week’s Income</p>
      <div className="h-40">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default WeeklyIncomeChart;
