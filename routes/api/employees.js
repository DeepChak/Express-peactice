const express = require('express')
const router = express.Router()
const path = require('path')
const employeeControler = require('../../controllers/employeeController')

router.route('/')
    .get(employeeControler.getAllEmployees)
    .post(employeeControler.updateEmployee)
    .put(employeeControler.updateEmployee)
    .delete(employeeControler.deleteEmployee)

router.route('/:id')
    .get(employeeControler.getEmployee)


module.exports = router