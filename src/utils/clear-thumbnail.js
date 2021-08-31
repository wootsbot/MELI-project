export default function clearThumbnail(url) {
  if (url) {
    return url.replace('http://http2.mlstatic.com/', '');
  }

  return null;
}
