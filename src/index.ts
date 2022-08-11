import { getInput } from "@actions/core";

try {
  const githubToken = getInput("github-token", { required: true });
  console.log(`github token is ${githubToken} Tada`);
} catch (err) {
  console.log(err);
}
