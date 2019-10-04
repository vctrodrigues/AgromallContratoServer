const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.status(200).send({
    title: "API",
    message: "API working fine"
  });
});

var clientsController = require("../controllers/clients");

router
  .route("/clients")
  .get(clientsController.index)
  .post(clientsController.new);

router
  .route("/clients/:client_id")
  .get(clientsController.view)
  .patch(clientsController.update)
  .put(clientsController.update)
  .delete(clientsController.delete);

module.exports = router;
