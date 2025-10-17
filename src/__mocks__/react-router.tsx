interface LinkProps {
  to: string;
  children: any;
  [key: string]: any;
}

interface NavLinkProps extends LinkProps {
  className?: any;
}

export const Link = ({ children, ...props }: LinkProps) => {
  return <a {...props}>{children}</a>;
};

export const NavLink = ({ children, className, ...props }: NavLinkProps) => {
  const classResult = typeof className === 'function'
    ? className({ isActive: false })
    : className;

  return <a {...props} className={classResult}>{children}</a>;
};

export const useNavigate = (): any => {
  return () => { };
};

export const useLocation = (): { pathname: string } => ({
  pathname: '/'
});

export const useParams = (): Record<string, string> => ({});

export const useSearchParams = (): [URLSearchParams, any] => [
  new URLSearchParams(),
  () => { }
];