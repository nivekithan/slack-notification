import { getInput } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
  const githubToken = getInput("github-token", { required: true });
  const octokit = getOctokit(githubToken);

  const repoName = `${context.repo.owner}/${context.repo.repo}`;
  const pushedBranch = context.ref.split("/").at(-1);

  console.log(context.payload);
  if (pushedBranch === undefined)
    throw new Error("Didn't expect pushedBranch to be undefined");
} catch (err) {
  console.log(err);
}
