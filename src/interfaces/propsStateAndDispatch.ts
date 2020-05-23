export interface IMapStateAndDispatchToProps {
  isAuthenticated?: boolean;
  onLogin?: () => void;
  toShowLoading?: boolean;
  children: React.ReactNode;
}
