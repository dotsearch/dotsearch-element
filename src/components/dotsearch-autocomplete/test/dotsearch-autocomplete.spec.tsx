import { newSpecPage } from '@stencil/core/testing';
import { DotsearchAutocomplete } from '../dotsearch-autocomplete';

describe('dotsearch-autocomplete', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DotsearchAutocomplete],
      html: `<dotsearch-autocomplete></dotsearch-autocomplete>`,
    });
    expect(page.root).toEqualHtml(`
      <dotsearch-autocomplete>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dotsearch-autocomplete>
    `);
  });
});
