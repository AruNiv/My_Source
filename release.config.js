const config = {
  branches: [ 'main' ],
  plugins: [
   "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
   "@semantic-release/github",
    [
      "@semantic-release/changelog",
      {
          "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    [
      "@semantic-release/exec",
      {
        "verifyReleaseCmd": "bash welcome.sh ${nextRelease.version}",
        "generateNotesCmd": "git log -1 --pretty=%B >> release.txt"
      }
    ]
    
  ]
};

module.exports = config;
