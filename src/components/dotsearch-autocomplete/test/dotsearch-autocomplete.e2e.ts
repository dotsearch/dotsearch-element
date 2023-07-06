import { newE2EPage } from '@stencil/core/testing';

describe('dotsearch-autocomplete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dotsearch-autocomplete></dotsearch-autocomplete>');

    const element = await page.find('dotsearch-autocomplete');
    expect(element).toHaveClass('hydrated');
  });
});
