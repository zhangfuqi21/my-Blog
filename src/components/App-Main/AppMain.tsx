import React, { memo } from "react";
import { MainWarpper } from "./style";
import { usePathname } from "next/navigation";
import Layout from "./Main/Layout";
export default function AppMain({ children }: { children: React.ReactNode }) {
  const router = usePathname();
  let isHome = true;
  if (router == "/home") {
    isHome = true;
  } else {
    isHome = false;
  }
  return (
    <MainWarpper>
      {isHome && <div className="bg" />}
      <Layout>{children}</Layout>
    </MainWarpper>
  );
}
