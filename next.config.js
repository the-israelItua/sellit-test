

module.exports = {
  images: {
    domains: ['serverless-backend-test.s3.amazonaws.com', "fakeimg.pl"],
},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
};

