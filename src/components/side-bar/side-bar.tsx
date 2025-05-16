import logo from '../../assets/lapologo.svg';
import Icon from './Icon';

const menuItems = [
  { name: 'Branches', icon: 'branchesIcon' },
  { name: 'Roles', icon: 'rolesIcon' },
  { name: 'Users', icon: 'userIcon' },
  { name: 'Card Scheme', icon: 'cardIcon' },
  { name: 'Card Profile', icon: 'cardProfileIcon' },
  { name: 'Card Request', icon: 'cardRequestIcon' },
  { name: 'Stock', icon: 'stockIcon' },
  { name: 'Cards', icon: 'cardsIcon' },
  { name: 'Block/Unblock Card', icon: 'blockUnblock' },
  { name: 'Authorization List', icon: 'authorisationIcon' },
  { name: 'Authorization Queue', icon: 'authorisationIcon' },
  { name: 'Trail', icon: 'trailIcon' },
  { name: 'Account', icon: 'userIcon' },
];

const SideBar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#003087', color: '#FFFFFF', fontFamily: 'Arial, sans-serif', padding: 0 }}>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <img src={logo} alt="LAPO Logo" style={{ width: '120px' }} />
      </div>

      <div style={{ padding: '10px 20px' }}>
        <button style={{ width: '100%', padding: '12px', background: '#E4F0FF', color: '#003087', border: 'none', borderRadius: '6px', fontFamily: 'Satoshi', fontWeight: '500', fontSize: '12px', lineHeight: '18px', letterSpacing: '0%', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
          <Icon name="dashboard" color="#003087" />
          Dashboard
        </button>
      </div>

      <div style={{ padding: '20px 0', flex: 1 }}>
        <div style={{ padding: '0 20px', color: '#B0B7C3', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '15px' }}>Main Menu</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ padding: '12px 20px', fontFamily: 'Satoshi', fontWeight: '400', fontSize: '12px', lineHeight: '18px', letterSpacing: '0%', display: 'flex', alignItems: 'center', gap: '12px', transition: 'color 0.3s' }}>
              <Icon name={item.icon} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button style={{ width: '100%', padding: '12px 20px', backgroundColor: 'transparent', color: '#FFFFFF', border: 'none', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'color 0.3s' }}>
          <Icon name="logoutIcon" color="#FFFFFF" />
          Logout
        </button>
      </div>

      <div style={{ padding: '20px', textAlign: 'left', color: '#B0B7C3', fontSize: '12px' }}>
        Powered by
        <div>
          <Icon name="poweredByIcon" color="#003087" size={42} style={{ width: '93.33332824707031px', height: '42px', position: 'relative', top: '10px', left: '0px' }} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;