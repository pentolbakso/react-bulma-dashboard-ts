import { NavLink, useLocation } from "react-router-dom";
import { ucFirstAllWords } from "../helpers/formatUtils";
import { Breadcrumb } from "react-bulma-components";

function getBreadcrumbs(path = "") {
  const parts = path.split("/").filter((el) => Boolean(el));
  return parts.map((part, index) => {
    const to = "/" + parts.slice(0, index + 1).join("/");
    const page = part.includes("-")
      ? part
      : part.charAt(0).toUpperCase() + part.slice(1);
    return { to, page };
  });
}

const Breadcrumbs = (props: any) => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);
  const crumbs = breadcrumbs
    .filter(({ page }) => page != "Dashboard")
    .map(({ to, page }) => {
      const pageName = ucFirstAllWords(page.replace("-", " "));
      return { name: pageName, to };
    });

  const homepage = { name: "Home", to: "/dashboard" };
  const items = [homepage, ...crumbs];

  return (
    <Breadcrumb separator="arrow">
      {items.map((it, idx) => (
        <li key={idx}>
          <Breadcrumb.Item renderAs={NavLink} to={it.to}>
            {it.name}
          </Breadcrumb.Item>
        </li>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
