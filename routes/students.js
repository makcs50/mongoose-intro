const { Router } = require("express");
const { contactsController } = require("../controllers/controllers");

const router = Router();
router.get("/students", contactsController.getStudents);

router.post("/students", contactsController.createStudents);

router.delete("/students/:id", contactsController.deleteStudents);
  
router.patch("/students/:id", contactsController.pathStudents);

module.exports = router;