import Dashboard from "views/Dashboard.js";
// import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
// import Maps from "views/Map.js";
import UserPage from "views/User.js";
// import UpgradeToPro from "views/Upgrade.js";
import Tab from './views/Tab'
import FileUpload from './views/FileUpload'
import Contact from './views/Contact'

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-layout-11",
    component: Dashboard,
    layout: "/demo",
  },
  //  {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/demo",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/demo",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/demo",
  // },
  // {
  //   path: "/user-page",
  //   name: "User Profile",
  //   icon: "nc-icon nc-single-02",
  //   component: UserPage,
  //   layout: "/demo",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/demo",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/demo",
  // },
  {
    path: "/item",
    name: "Item",
    icon: "nc-icon nc-tile-56",
    component: Tab,
    layout: "/demo",
  },

  {
    path: "/fileUploadandPreview",
    name: "File Upload & Preview",
    icon: "nc-icon nc-single-copy-04",
    component: FileUpload,
    layout: "/demo",
  },
  {
    pro:true,
    path: "/contactUs",
    name: "Contact Us",
    icon: "nc-icon nc-circle-10",
    component: Contact,
    layout: "/demo",
  },
  
];
export default routes;
