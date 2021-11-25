import router from "./router.js";
import UserController from "./controller.js";

const models = {};
const controller = new UserController(models);
const routes = router(controller);

export default routes;
