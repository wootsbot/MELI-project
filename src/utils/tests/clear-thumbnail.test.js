import clearThumbnail from '../clear-thumbnail';

describe('clearThumbnail', () => {
  it('should return string clean only text "iphone"', () => {
    const result = clearThumbnail('http://http2.mlstatic.com/iphone');
    expect(result).toBe('iphone');
  });

  it('should return null when the argument is null', () => {
    const result = clearThumbnail();
    expect(result).toBeNull();
  });
});
