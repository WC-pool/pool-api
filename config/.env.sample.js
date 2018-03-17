
const envBuild = {
    'rest-server': [
      'NODE_ENV=test',
      'PORT=3396',
      'LOCAL_USER=root',
      'LOCAL_HOST=localhost', // MUST keep localhost for pg
      'LOCAL_DATABASE=pool',
      'LOCAL_PASSWORD=password',
      'LOCAL_PORT=5432',
      'AWS_ACCESS_KEY_ID=',
      'AWS_SECRET_ACCESS_KEY='
  
      // --- FOR AWS RDS ---
      // 'AWS_USER=',
      // 'AWS_HOST=',
      // 'AWS_DATABASE=',
      // 'AWS_PASSWORD=',
      // 'AWS_PORT=',
    ],

    'socket-server': [
      'NODE_ENV=',
      'HOST=http://localhost', 
      'PORT=4155',
      'REST_SERVER_URL=http://localhost:4990',
      'TOKEN_SECRET='
    ]
  }
  
  module.exports = envBuild;