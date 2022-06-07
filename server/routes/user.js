const router = require("express").Router();
const userController = require('../controllers/userController');
console.log(userController);


router.post("/create",userController.create_user);

router.get("/",userController.user_all);
router.get("/:userId");
router.put("/:userId");
router.delete("/:userId");


module.exports = router;