import { getInput } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
  const githubToken = getInput("github-token", { required: true });
  const octokit = getOctokit(githubToken);

  const repoName = `${context.repo.owner}/${context.repo.repo}`;
  const pushedBranch = `${context.ref}`;

  console.log({ repoName, pushedBranch });
} catch (err) {
  console.log(err);
}
