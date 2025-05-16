import React from 'react';

interface CardRequest {
  branch: string;
  cardType: string;
  quantity: number;
  status: string;
}

interface RecentCardRequestsTableProps {
  data: CardRequest[];
}

const RecentCardRequestsTable: React.FC<RecentCardRequestsTableProps> = ({ data }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Ready':
        return 'bg-green-100 text-green-800';
      case 'InProgress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Acknowledged':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      className="p-4 overflow-x-auto my-6"
      style={{
        border: '1px solid #E2E2E2',
        borderRadius: '8px',
        backgroundColor: '#fff',
        padding: '12px',
      }}
    >
      <h2
        style={{
          fontFamily: 'Satoshi',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '18px',
          marginBottom: '16px',
        }}
      >
        Recent Card Requests
      </h2>
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr
            style={{
              backgroundColor: '#F1F7FF',
              borderTop: '1px solid #E2E2E2',
              borderBottom: '1px solid #E2E2E2',
            }}
          >
            {['Branch', 'Card Type', 'Quantity', 'Status'].map((title, i) => (
              <th
                key={i}
                style={{
                  padding: '12px 24px',
                  fontFamily: 'Satoshi',
                  fontWeight: 500,
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: 'rgba(0, 0, 0, 0.5608)',
                }}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((request, index) => (
            <tr key={index} style={{ backgroundColor: '#FFFFFF' }}>
              {[request.branch, request.cardType, request.quantity, request.status].map(
                (value, i) => (
                  <td
                    key={i}
                    style={{
                      width: '109.8px',
                      height: '42px',
                      padding: '12px 24px',
                      borderTop: '1px solid #EAECF0',
                      borderBottom: '1px solid #EAECF0',
                      fontFamily: 'Satoshi',
                      color: '#475467',
                    }}
                  >
                    {i === 3 ? (
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusStyles(
                          String(value)
                        )}`}
                      >
                        {value}
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCardRequestsTable;
