/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api',
				destination: 'http://y.backend:1323',
			},
		]
	},
};

export default nextConfig;
