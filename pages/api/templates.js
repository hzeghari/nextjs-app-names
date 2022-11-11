// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Octokit } = require("@octokit/core")
// import { Octokit } from "@octokit/core";

require('dotenv-flow').config()

export default async function handler(req, res) {
  // Octokit.js
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit({
    auth: process.env.authKEY,
  });

  const { data } = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: "vercel",
    repo: "next.js",
    path: "examples",
  });

  let result = data.map(a => a.name);

  console.log("fitredTemplatesName>> ", result);
  
  res.status(200).send(await result);
  // res.status(200).json({ name: 'John Doe' })
}
