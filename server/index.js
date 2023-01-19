const fs = require("fs");
const cors = require("cors");
const express = require("express");
const PythonShell = require("python-shell").PythonShell;
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/problem", (req, res) => {
  fs.writeFileSync("test.py", req.body.code);

  const testCases = {
    one: [1, 2, 3],
    two: [2, 2, 4],
    three: [2, -2, 0],
  };

  const promises = [];
  const testCaseResults = [];
  const testCasesKeys = Object.keys(testCases);

  testCasesKeys.map((key) => {
    promises.push(
      new Promise((resolve, reject) => {
        PythonShell.run(
          "test.py",
          {
            mode: "text",
            pythonOptions: ["-u"],
            args: testCases[key],
          },
          function (err, results) {
            console.log(results)
            if (err) {
              reject();
              throw err;
            }
            console.log(results);
            testCaseResults.push(results[0]);
            resolve(true);
          }
        );
      })
    );
  });

  Promise.all(promises).then(() => {
    res.json({ testCaseResults });
  });
});