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
        "prepareCmd": "set-version ${nextRelease.version}",
        "verifyReleaseCmd": "bash welcome.sh ${nextRelease.version}",
        "generateNotesCmd": "git log -1 --pretty=%B >> release.txt"        
      }
    ],
    
    '@semantic-release/github'
  ]
};

module.exports = config;
