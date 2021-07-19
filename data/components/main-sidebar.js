import roles from "../privillages/roles";
import dashboard from "../../public/images/dashboard.png";
import profile from "../../public/images/profile.png";
import employees from "../../public/images/employee.png";
import planner from "../../public/images/planner.png";
import rota from "../../public/images/rota.png";
import authorisations from "../../public/images/authorisation.png";
import queries from "../../public/images/query.png";
import notifications from "../../public/images/notification.png";
import settings from "../../public/images/settings.png";

// master - me and matt
// admin - lucy, morgan, yas, brad, guy, dan, andy
// employees - everyone
// sign up section, checklist for users to set themselves up, send a link

const sidebarItems = [
  {
    name: "Dashboard",
    privillages: [roles.MASTER, roles.ADMIN, roles.PERSONELL],
    src: dashboard,
    path: "/dashboard",
  },
  {
    name: "Profile",
    privillages: [roles.MASTER, roles.ADMIN, roles.PERSONELL],
    src: profile,
    path: "/profile",
  },
  {
    name: "Employees",
    privillages: [roles.MASTER, roles.ADMIN],
    src: employees,
    path: "/employees",
  },
  {
    name: "Planner",
    privillages: [roles.MASTER, roles.ADMIN],
    src: planner,
    path: "/planner",
  },
  {
    name: "Rota",
    privillages: [roles.MASTER, roles.ADMIN],
    src: rota,
    path: "/rota",
  },
  {
    name: "Authorisations",
    privillages: [roles.MASTER, roles.ADMIN],
    src: authorisations,
    path: "/authorisations",
  },
  {
    name: "Queries",
    privillages: [roles.MASTER, roles.ADMIN],
    src: queries,
    path: "/queries",
  },
  {
    name: "Notifications",
    privillages: [roles.MASTER, roles.ADMIN],
    src: notifications,
    path: "/notifications",
  },
  {
    name: "Settings",
    privillages: [roles.MASTER, roles.ADMIN],
    src: settings,
    path: "/settings",
  },
];

// converts the object to an array
// loops through each item in the array
// if the privillages array present in each item holds the queried role return that item
export const getSidebar = (role) =>
  Object.values(sidebarItems).filter((item) =>
    item.privillages.find((permission) => permission === role)
  );

const masterSidebar = getSidebar(roles.MASTER);
const adminSidebar = getSidebar(roles.ADMIN);
const personellSidebar = getSidebar(roles.PERSONELL);

export { masterSidebar, adminSidebar, personellSidebar };
