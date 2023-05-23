const { Router } = require("express");
const { contactsController } = require("../controllers/controllers");

const router = Router();
router.get("/messages", contactsController.getMessage);

router.post("/messages", contactsController.postMessage)

router.get("/users", contactsController.getMessage);
  
  router.post("/users", contactsController.postMessage);
  
  router.delete("/users:id", contactsController.deleteMessage);
  
  router.patch("/users:id", contactsController.pathMessage);

module.exports = router;