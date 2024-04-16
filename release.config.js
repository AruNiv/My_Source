const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    
     
    [
      "@semantic-release/exec",
      {
        "verifyReleaseCmd": "bash welcome.sh ${nextRelease.version}",
        "generateNotesCmd": "git log -1 --pretty=%B >> release.txt"
      }
    ],
    '@semantic-release/github'
  ]
};

module.exports = config;
