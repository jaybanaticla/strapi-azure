module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: process.env.port,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'af5769add475737871a8e344681a1878'),
    },
  },
});
