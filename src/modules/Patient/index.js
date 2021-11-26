import router from "./router.js";
import PatientController from "./controller.js";
import Patient from "./model.js";
const models = { Patient };
const controller = new PatientController(models);
const routes = router(controller);

export default routes;
