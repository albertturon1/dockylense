import {PortalHost} from '@rn-primitives/portal';

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({children}: ProvidersProps) => {
  return (
    <>
      <PortalHost />
      {children}
    </>
  );
};
