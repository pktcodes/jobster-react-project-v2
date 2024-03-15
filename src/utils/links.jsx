import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';

const links = [
  {
    id: 1,
    icon: <IoBarChartSharp />,
    text: 'stats',
    path: '/dashboard',
  },
  {
    id: 2,
    icon: <MdQueryStats />,
    text: 'all jobs',
    path: '/dashboard/all-jobs',
  },
  {
    id: 3,
    icon: <FaWpforms />,
    text: 'add job',
    path: '/dashboard/add-job',
  },
  {
    id: 4,
    icon: <ImProfile />,
    text: 'profile',
    path: '/dashboard/profile',
  },
];

export default links;
