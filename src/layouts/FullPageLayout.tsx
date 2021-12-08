import React, { ReactNode, Suspense } from "react";

const loading = () => null;

const FullPageLayout = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={loading()}>{children}</Suspense>;
};

export default FullPageLayout;
