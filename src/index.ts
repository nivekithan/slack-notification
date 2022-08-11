import { getInput } from "@actions/core";

try {
  const githubToken = getInput("github-token");
  console.log(`github token is ${githubToken}`);
} catch (err) {}
