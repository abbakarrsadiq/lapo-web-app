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
import notificationIcon from '../../assets/notificationIcon.svg';
import avatarIcon from '../../assets/avatarIcon.svg';
import calendarIcon from '../../assets/calendarIcon.svg';
import rightIcon from '../../assets/checvronRightIcon.svg';
import issueCardIcon from '../../assets/issueCardIcon.svg';
import manageCardIcon from '../../assets/manageCardIcon.svg';
import reviewCardRequestIcon from '../../assets/reviewCardRequestIcon.svg';
import issuePersonalizedCardIcon from '../../assets/issuePersonalizedIcon.svg';
import arrowUpIcon from '../../assets/arrowUpIcon.svg';
import attentionIcon from '../../assets/attentionIcon.svg';
import bankNoteIcon from '../../assets/bankNoteIcon.png';
import pendingIcon from '../../assets/pendingIcon.png';
import creditCardCheck from '../../assets/credit-card-check.svg';
import creditCardEdit from '../../assets/credit-card-edit.svg';
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
  poweredByIcon,
  notificationIcon,
  avatarIcon,
  calendarIcon,
  rightIcon,
  issueCardIcon,
  manageCardIcon,
  reviewCardRequestIcon,
  issuePersonalizedCardIcon,
  arrowUpIcon,
  attentionIcon,
  bankNoteIcon,
  pendingIcon,
  creditCardCheck,
  creditCardEdit
};
export type IconName = keyof typeof icons;
const Icon = ({ name, color = '#B0B7C3', size = 16 }: { name: IconName, color?: string, size?: number }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    return <span style={{ width: `${size}px`, height: `${size}px`, backgroundColor: color, borderRadius: '50%' }} />;
  }
  return <img src={IconComponent} alt={`${name} icon`} style={{ width: `${size}px`, height: `${size}px`, color: color }} />;
};

export default Icon;