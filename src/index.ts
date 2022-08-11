import { getInput } from "@actions/core";

try {
  const githubToken = getInput("github-token", { required: true });
  console.log(`github token is ${githubToken}`);
} catch (err) {
  console.log(err);
}
