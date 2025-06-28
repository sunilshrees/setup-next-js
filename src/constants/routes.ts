import { ROLES } from "./roles";

const ROLE_PERMISSIONS = {
  "/incubator-dashboard": [ROLES.INCUBATOR],
  "/startup-dashboard": [ROLES.STARTUP],
};

const PUBLIC_ROUTES = [
  "/",
  "/privacy-policy",
  "/refund-policy",
  "/terms-of-use",
  "/contactus",
];
const AUTH_ROUTES = [
  "/login",
  "/startup-registration",
  "/forgot-password",
  "/incubator-registration",
];
const USER_ROUTES = [
  "/startup-dashboard",
  "/incubator-dashboard",
  "/dashboard",
];

export { PUBLIC_ROUTES, AUTH_ROUTES, USER_ROUTES, ROLE_PERMISSIONS };
