export const DynamicIcon = ({ name, ...props }: any) => {
  const MockIcon = `mock-icon-${name}`;
  return MockIcon;
};

export const iconNames = ['search', 'heart', 'star', 'home'];

export const Search = () => 'SearchIcon';
export const Heart = () => 'HeartIcon';
export const Star = () => 'StarIcon';
export const Home = () => 'HomeIcon';

export default {
  DynamicIcon,
  iconNames,
  Search,
  Heart,
  Star,
  Home
};