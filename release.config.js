const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    
    ["@semantic-release/git", {
      "assets": ["*.sh", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],    
    [
      "@semantic-release/exec",
      {
        "verifyReleaseCmd": "echo ${nextRelease.version} >> release.txt"
      }
    ],
    '@semantic-release/github'
  ]
};

module.exports = config;
