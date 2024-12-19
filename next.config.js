module.exports = {
    reactStrictMode: true, // Enables strict mode for better debugging
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "zsagpytamvnkshofuelp.supabase.co",
            port: '',
            pathname: '/storage/v1/object/public/cabin-images/**',
            search: '',
          },
        ],
      },
  };