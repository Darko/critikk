const config = {
  app: {
    port: parseInt(process.env.NODE_PORT) || 4000,
    jwtSecret: process.env.JWT_SECRET
  },
  mongo: {
    name: 'Critikk',
    uri: 'mongodb://localhost/critikk',
    options: {
      autoIndex: true,
      bufferCommands: true
    }
  },
  github: {
    secret: process.env.GITHUB_SECRET,
    clientId: process.env.GITHUB_CLIENT_ID
  },
  frontEnd: {
    url: 'https://critikk.io'
  }
}

export default config;
