const {createVanillaExtractPlugin} = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = {
  images: {
    domains: ['pbs.twimg.com'],
  },
  withVanillaExtract(nextConfig){}
}
