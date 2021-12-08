import React, { ReactNode, Suspense } from "react";
import { Columns, Section } from "react-bulma-components";
import { Outlet } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import SidebarMenu from "./SidebarMenu";

const loading = () => <div className="text-center">Loading...</div>;

const DashboardLayout = () => {
  return (
    <Columns>
      <Columns.Column
        size={2}
        className="has-background-light"
        style={{ minHeight: "100vh" }}
      >
        <Section>
          <SidebarMenu />
        </Section>
      </Columns.Column>
      <Columns.Column>
        <Section>
          <Breadcrumbs separator="arrow" style={{ marginBottom: "0.5rem" }} />
          <Suspense fallback={loading()}>
            <Outlet />
          </Suspense>
        </Section>
      </Columns.Column>
    </Columns>
  );
};
export default DashboardLayout;
