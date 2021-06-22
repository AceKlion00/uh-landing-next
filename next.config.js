module.exports = {
  env: {
    googleApiKey: 'AIzaSyDocOTLnXB8Kgn46cZSKokpsVHpq6MTORE',
    api: process.env.API_URL || 'http://127.0.0.1:3005/api',
    logRocketAppId: 'ipzg7b/united-hardscapes',
    production: process.env.PRODUCTION,
  },
  images: {
    domains: ["unitedhardscapes.com", "assets.unitedhardscapes.com", "marketplace-assets.unitedhardscapes.com", "staging-assets.unitedhardscapes.com"],
  }
}
