interface NestedMFEOptions {
  initialPath: string;
  defaultHistory?: any;
  onSignIn: () => void;
  onNavigate: ({ pathname: string }) => void;
}

interface NestedMFEMountResult {
  onParentNavigate: ({ pathname: string }) => void;
}
