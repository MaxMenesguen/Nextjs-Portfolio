// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");

async function generateSitemap() {
	const hostname = process.env.HOSTNAME || "https://example.com"; // Use a default placeholder
	const sitemap = new SitemapStream({
		hostname: hostname,
	});

	// Add URLs to your sitemap
	sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
	sitemap.write({ url: "/about", changefreq: "daily", priority: 0.9 });
	sitemap.write({ url: "/projects", changefreq: "daily", priority: 0.9 });
	

	sitemap.end();

	const sitemapXML = (await streamToPromise(sitemap)).toString();
	const gzippedSitemap = createGzip();

	fs.writeFileSync("./public/sitemap.xml.gz", sitemapXML);
}

generateSitemap();
