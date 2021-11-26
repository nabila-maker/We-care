import PatientRouter from "./Patient/index.js";
import HopitalRouter from "./Hopital/index.js";
const routes = {
  "/patients": PatientRouter,
  "/Hopitals": HopitalRouter,
};

export default routes;
