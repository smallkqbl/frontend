const path = require("path");
const { projectPath } = require("./constant");

const { clientInputPath, clientOutputPath } = projectPath;
const pagePath = path.join(clientInputPath, "pages");

module.exports = {
  client: {
    sample: "./source/js/pages/sample/components/index.jsx",
    csssample: "./source/style/pages/_sample.scss"
  }
};
