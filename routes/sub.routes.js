import { Router } from "express";
const subRoute = Router();

subRoute.post("/", (req, res) => {
  res.send({
    message: "Initiate Payment Plan",
  });
});
subRoute.get("/:id", (req, res) => {
  res.send({
    message: "Get Subscription",
  });
});
subRoute.get("/", (req, res) => {
  res.send({
    message: "get all user Subscription",
  });
});
subRoute.put("/:id", (req, res) => {
  res.send({
    message: "update Subscription",
  });
});
subRoute.delete("/:id", (req, res) => {
  res.send({
    message: "delete Subscription",
  });
});
subRoute.put("/:id/cancel", (req, res) => {
  res.send({
    message: "Cancel Subscription",
  });
});
subRoute.get("/upcoming-renewals", (req, res) => {
  res.send({
    message: "GET upcoming renewals",
  });
});

export default subRoute;
