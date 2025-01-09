const baseUrl = process.env.BASE_URL || 'http://localhost:3000/';

export default async function sitemap() {
  const staticPages = [
    { path: '', priority: 1 },
    { path: 'bio', priority: 1 },
    { path: 'actuaciones', priority: 1 },
    { path: 'espectaculos', priority: 1 },
    { path: 'logros', priority: 0.8 },
    { path: 'prensa', priority: 0.8 },
  ];

  const sitemap = staticPages.map(({ path, priority }) => {
    const urlPath = path ? `/${path}` : '/';
   

    return {
      url: `${baseUrl}${urlPath}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority,
    
    };
  });

  return sitemap;
}
