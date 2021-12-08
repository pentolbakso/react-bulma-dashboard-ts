import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Menu } from "react-bulma-components";
import { RootState } from "../rematch/store";

const MenuItem = ({
  to,
  children,
  active,
}: {
  to: string;
  children: any;
  active: boolean;
}) => (
  <Menu.List.Item
    renderAs="span"
    active={active}
    className={active ? "has-text-weight-semibold" : ""}
  >
    <Link to={to} style={active ? { backgroundColor: "#ddd" } : undefined}>
      {children}
    </Link>
  </Menu.List.Item>
);

const SidebarMenu = () => {
  const me = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const page = React.useMemo(() => {
    const parts = pathname.split("/");
    const page = parts.length >= 1 ? parts[1] : "?";
    return page;
  }, [pathname]);

  return (
    <Menu>
      <Heading size={4}>Site Name</Heading>
      <Menu.List title="Team">
        <MenuItem to="/dashboard" active={page == "dashboard"}>
          Dashboard
        </MenuItem>
        <MenuItem to="/users" active={page == "users"}>
          Manage Users
        </MenuItem>
      </Menu.List>
      <Menu.List title="Account">
        <MenuItem to="/edit-account" active={page == "edit-account"}>
          Edit Account
        </MenuItem>
        <Menu.List.Item
          onClick={() => {
            dispatch.auth.logout().then(() => navigate("/", { replace: true }));
          }}
        >
          Logout
        </Menu.List.Item>
      </Menu.List>
    </Menu>
  );
};

export default SidebarMenu;
