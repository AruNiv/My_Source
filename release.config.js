const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    
   [
      "@semantic-release/exec",
      {
        "prepareCmd": "bash welcome.sh ${nextRelease.version}"
      }
    ],
    '@semantic-release/github'
  ]
};

module.exports = config;
