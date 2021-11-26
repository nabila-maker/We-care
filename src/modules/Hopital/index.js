import router from "./router.js";
import HopitalController from "./controller.js";
import Hopital from "./model.js";
const models = { Hopital };

const controller = new HopitalController(models);
const routes = router(controller);

export default routes;
