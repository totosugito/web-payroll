import {lazy} from "react";

const UiUsers = lazy(() => import ('./ui-users'));
const UiProjects = lazy(() => import ('./ui-projects'));

export {UiUsers, UiProjects}