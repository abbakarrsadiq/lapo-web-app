import authorisationIcon from '../../assets/authorizationIcon.svg';
import branchesIcon from '../../assets/branchesIcon.svg';
import cardIcon from '../../assets/cardIcon.svg';
import cardProfileIcon from '../../assets/cardProfileIcon.svg';
import cardRequestIcon from '../../assets/cardRequestIcon.svg';
import cardsIcon from '../../assets/cardsIcon.svg';
import homeIcon from '../../assets/dashboardIcon.svg';
import lapologo from '../../assets/lapologo.svg';
import logoutIcon from '../../assets/logoutIcon.svg';
import rolesIcon from '../../assets/rolesIcon.svg';
import stockIcon from '../../assets/stockIcon.svg';
import trailIcon from '../../assets/trailIcon.svg';
import unblockCardIcon from '../../assets/unblockCardIcon.svg';
import userGroup from '../../assets/userGroup.svg';
import userIcon from '../../assets/userIcon.svg';
import poweredByIcon from '../../assets/poweredByIcon.svg';

const icons = {
  authorisationIcon,
  branchesIcon,
  cardIcon,
  cardProfileIcon,
  cardRequestIcon,
  cardsIcon,
  dashboard: homeIcon,
  lapologo,
  logoutIcon,
  rolesIcon,
  stockIcon,
  trailIcon,
  blockUnblock: unblockCardIcon,
  userGroup,
  userIcon,
  poweredByIcon
};

const Icon = ({ name, color = '#B0B7C3', size = 16 }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    return <span style={{ width: `${size}px`, height: `${size}px`, backgroundColor: color, borderRadius: '50%' }} />;
  }
  return <img src={IconComponent} alt={`${name} icon`} style={{ width: `${size}px`, height: `${size}px`, color: color }} />;
};

export default Icon;