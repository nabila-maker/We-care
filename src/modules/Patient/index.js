import router from "./router.js";
import PatientController from "./controller.js";

const models = {};
const controller = new PatientController(models);
const routes = router(controller);

export default routes;
