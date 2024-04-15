const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
   [
      "@semantic-release/exec",
      {
        "prepareCmd": "bash ./My_Source/welcome.sh ${nextRelease.version}",
        "publishCmd" : "echo publish"
      }
    ]
    
  ]
};

module.exports = config;
