import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface MonthlyIssuanceData {
  month: string;
  personalized: number;
  instant: number;
}

interface MonthlyIssuanceChartProps {
  data: MonthlyIssuanceData[];
}

const MonthlyIssuanceChart: React.FC<MonthlyIssuanceChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: 'Personalized',
        data: data.map((item) => item.personalized),
        backgroundColor: '#014DAF',
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: 'Instant',
        data: data.map((item) => item.instant),
        backgroundColor: '#CCE2FF',
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#2D3748',
        titleFont: { size: 12, family: "'Inter', sans-serif" },
        bodyFont: { size: 12, family: "'Inter', sans-serif" },
        padding: 8,
        cornerRadius: 4,
      },
    },
    layout: {
      padding: {
        bottom: 2,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          font: { size: 12, family: "'Inter', sans-serif" },
          color: '#718096',
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        grid: {
          color: '#EDF2F7',
        },
        ticks: {
          font: { size: 12, family: "'Inter', sans-serif" },
          color: '#718096',
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: '100%',
        height: '318px',
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E2E2E2',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <p className="text-base font-semibold text-gray-700 mb-4">Monthly Issuance</p>

      <div style={{ flexGrow: 1 }}>
        <Bar data={chartData} options={options} />
      </div>

      <div style={legendStyle}>
        <LegendItem color="#014DAF" label="Personalized" />
        <LegendItem color="#CCE2FF" label="Instant" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
    <div
      style={{
        width: '12px',
        height: '12px',
        backgroundColor: color,
        borderRadius: '2px',
      }}
    />
    <span style={{ color: '#808080' }}>{label}</span>
  </div>
);

const legendStyle: React.CSSProperties = {
  borderTop: '0.7px solid #E2E2E2',
  width: '100%',
  paddingTop: '12px',
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  fontFamily: 'Inter, sans-serif',
  fontSize: '12px',
  color: '#4A5568',
  marginTop: '6px',
};

export default MonthlyIssuanceChart;
