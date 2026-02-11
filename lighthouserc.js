module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: ['/'],
      numberOfRuns: 3
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
