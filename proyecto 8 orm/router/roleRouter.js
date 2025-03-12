const express = require('express');
const router=express.Router();
const RoleController=require('../controller/roleController')

router.get("/roles",RoleController.listarRoles)
router.post("/roles",RoleController.guardarRoles)




module.exports=router;