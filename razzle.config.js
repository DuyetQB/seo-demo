module.exports = {
  plugins: [
    {
      name: 'less',
      options: {
        postcss: {
          dev: {
            sourceMap: false,
          },
        },
      },
    },
  ],
};