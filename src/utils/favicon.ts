export const getDomain = (siteUrl: string): string => {
  try {
    return new URL(siteUrl).hostname;
  } catch {
    return '';
  }
};

export const getFaviconUrl = (siteUrl: string, size = 128): string => {
  const domain = getDomain(siteUrl);
  if (!domain) return '';
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
};

export default getFaviconUrl;
