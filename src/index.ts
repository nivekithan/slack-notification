import { getInput } from "@actions/core";

try {
  const githubToken = getInput("githubToken");
  console.log(`github token is ${githubToken}`);
} catch (err) {}
