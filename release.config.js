const config = {
  branches: ["main"],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    
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
