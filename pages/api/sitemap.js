export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml')
  res.write('<?xml version="1.0" encoding="UTF-8"?>')
  res.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  res.write(`
    <url>
      <loc>https://enchante.digital/</loc>
      <lastmod>2023-06-15</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://enchante.digital/servicos</loc>
      <lastmod>2023-06-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://enchante.digital/sobre</loc>
      <lastmod>2023-06-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https//enchante.digital/contato</loc>
      <lastmod>2023-06-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `)
  res.write('</urlset>')
  res.end()
}
