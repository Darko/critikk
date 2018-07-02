const config = {
  app: {
    port: 4000,
    jwtSecret: 'very-secret'
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
    url: 'http://localhost:4000'
  }
}

export default config;
