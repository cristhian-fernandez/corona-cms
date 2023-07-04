module.exports = ({ env }) => ({
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true, //*1
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
});