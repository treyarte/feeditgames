import type { NextConfig } from "next";

const hosts = [
  "***.gematsu.com",
  "mmos.com",
  "***.destructoid.com",
  "***.siliconera.com",
  "***.nintendolife.com",
  "***.ignimgs.com",
  "***.contentstack.com",
  "***.gnwcdn.com",
  "***.hardcoregamerimages.com",
  "***.kinja-img.com",
  "***.gamespot.com",
  "***.dualshockersimages.com",
  "***.mos.cms.futurecdn.net",
  "***.ign.com",
  "***.gamespot.com",
  "***.reedpopcdn.com",
  "assetsio.reedpopcdn.com",
  "***.pcgamer.com",
  "***.gamedeveloper.com",
  "***.gamedeveloper.com",
  "hardcoregamer.com",
  "backloggamersphotos.blob.core.windows.net"
]

const nextConfig: NextConfig = {
  	images: {
		//@ts-expect-error typescript is complaining but its correct
		remotePatterns: [
			...hosts.map((hostname) => (
				{
					protocol: 'https',
					hostname
				}
			))
		]
	},
	experimental: {
		scrollRestoration: false,
	},
};

export default nextConfig;
