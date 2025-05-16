import Icon from '../side-bar/Icon';
import QuickAccess from './quick-access';
import Analytics from './Analytics/analytics';

const Dashboard: React.FC = () => {
  const userName = 'Nazeer';
  const lastLogin = '26/11/2024 14:39:58';
  const quickAccessItems = [
    { label: 'Manage a Card', icon: 'manageCardIcon' },
    { label: 'Issue Instant Card', icon: 'issueCardIcon' },
    { label: 'Issue Personalized Card', icon: 'issuePersonalizedCardIcon' },
    { label: 'Review Card Requests', icon: 'reviewCardRequestIcon' },
  ];
  return (
    <div className="p-5 font-sans" style={{ background: '#F1F7FF', width: '100%' }}>
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-5" style={{ background: '#FFFFFF', padding: '16px', marginBottom: '20px' }}>
        <div className="flex items-center gap-2">
          <Icon name="dashboard" color="#718096" size={20} />
          <h1 className="text-base font-medium text-gray-700" style={{ marginLeft: '4px', fontSize: '12px', fontWeight: 500, color: '#001735', lineHeight: '20px' }}>Dashboard</h1>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              style={{ padding: '8px 12px 8px 32px', border: '0.98px solid #D0D5DD', borderRadius: '97.99px', boxShadow: '0px 0.98px 1.96px 0px #1018280D', fontSize: '14px', color: '#2D3748', width: '214px', height: '40px' }}
            />
          </div>
          <Icon name="notificationIcon" color="#718096" size={20} />
          <Icon name="avatarIcon" color="#718096" size={20} />
        </div>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="text-xl font-semibold text-gray-800" style={{ fontSize: '18px', fontWeight: 700, lineHeight: '18px', color: '#121212' }}>
            Hi {userName}, what would you like to do today?
          </h1>
          <p className="text-sm text-gray-500" style={{ fontSize: '12px', fontWeight: '500', lineHeight: '12px', color: '#121212' }}>Last login: {lastLogin}</p>
        </div>
        <div>
          <p style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '30px',
            border: '1px solid #D0D5DD',
            borderRadius: '8px',
            fontSize: '11px',
            fontWeight: '500',
            textAlign: 'center',
            color: '#121212',
            lineHeight: '30px',
            gap: '10px',
            margin: '0 auto'
          }}>
            <Icon name="calendarIcon" color="#718096" size={14} />
            Today 11 Nov 2024
          </p>

        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <QuickAccess quickAccessItems={quickAccessItems} />
        <Analytics />
      </div>
    </div>
  );
};

export default Dashboard;
