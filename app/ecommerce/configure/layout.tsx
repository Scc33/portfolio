import { ReactNode } from "react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
