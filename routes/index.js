const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

module.exports = router;

router.post("/open-notepad", (req, res) => {
  exec("start notepad", (err, stdout, stderr) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

router.post("/open-youtube-video", (req, res) => {
  exec(
    `start chrome https://www.youtube.com/results?search_query=${
      req?.body?.video || ""
    }`,
    (err, stdout, stderr) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

router.get("/ip-data", (req, res) => {
  exec("ipconfig", (err, stdout, stderr) => {
    if (err) {
      res.send({
        error: "Error",
      });
    } else {
      res.send({
        data: stdout,
      });
    }
  });
});
