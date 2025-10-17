import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export function Icon({ name, color = 'white', size = 20, strokeWidth = 1.0, ...props }: IconProps) {
  return <DynamicIcon name={name} color={color} size={size} strokeWidth={strokeWidth}  {...props} />
}