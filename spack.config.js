const { config } = require("@swc/core/spack");
const path = require("path");

module.exports = config({
  entry: path.resolve(__dirname, "src", "index.ts"),
  target: "node",
  mode: "production",
  output: { path: path.resolve(__dirname, "dist"), name: "index.js" },
});
