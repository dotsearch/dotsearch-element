import { Component, Host, Prop, h } from '@stencil/core';
import { ApiService } from '../../services/api.service';

@Component({
  tag: 'dotsearch-autocomplete',
  styleUrl: 'dotsearch-autocomplete.css',
  shadow: true,
})
export class DotsearchAutocomplete {
  @Prop() placeholder: string;

  // api stuff
  @Prop() endpoint: string | undefined = undefined;
  @Prop() token: string;

  // search stuff
  @Prop({ mutable: true }) value: string = '';
  @Prop() fuzzines: 0 | 1 | 2 = 0;

  @Prop({ mutable: true }) loading: boolean = false;

  private host: HTMLElement;
  // search timeout
  private searchTimeout: any;
  // api service
  private apiService: ApiService;
  // create a new instance of the api service when the component is created
  componentWillLoad() {
    this.apiService = new ApiService(this.token, this.endpoint);

    // fuzzines must be 0 1 or 2 and not float
    if (this.fuzzines !== 0 && this.fuzzines !== 1 && this.fuzzines !== 2) {
      this.fuzzines = 0;
    }

    setTimeout(() => {
      // on this.host focus out
      this.host.addEventListener('focusout', () => {
        this.clearResults();
        this.host.shadowRoot.querySelector('div[part="dotsearch-autocomplete-results"]').classList.add('hidden');
      });
    }, 0);
  }

  render() {
    return (
      <Host ref={el => (this.host = el)}>
        <div class="dotsearch-autocomplete">
          {/* div.dotsearch-autocomplete-container */}
          <div part="dotsearch-autocomplete-container" class="dotsearch-autocomplete-container">
            <input
              part="dotsearch-autocomplete-input"
              type="text"
              class="dotsearch-autocomplete-input"
              placeholder={this.placeholder}
              onInput={(event: any) => this.onInputChange(event)}
              onFocus={() => this.onInputFocus()}
            />

            {/* div.dotsearch-autocomplete-results */}
            <div part="dotsearch-autocomplete-results" class={{ 'dotsearch-autocomplete-results': true, 'hidden': this.loading == false && this.value.length == 0 }}></div>
          </div>
          {/* slot for search button */}
          <slot name="dotsearch-button"></slot>
        </div>
      </Host>
    );
  }

  private onInputFocus() {
    this.onInputChange({ target: { value: this.value } });
    if (this.value.length != 0) this.host.shadowRoot.querySelector('div[part="dotsearch-autocomplete-results"]').classList.remove('hidden');
  }

  // on input change
  private onInputChange(event: any) {
    // get the input value
    this.value = event.target.value ?? this.value;
    // clear the timeout
    clearTimeout(this.searchTimeout);
    // clear div.dotsearch-autocomplete-results
    this.clearResults();
    // if the value is empty, return
    if (this.value === '') {
      this.loading = false;
      return;
    }
    // set the loading to true
    this.loading = true;
    // render loading
    this.renderLoading();
    // set the timeout
    this.searchTimeout = setTimeout(async () => {
      try {
        // clear div.dotsearch-autocomplete-results
        this.clearResults();
        // if the value is empty, return
        if (this.value === '') {
          this.loading = false;
          return;
        }
        // render loading
        this.renderLoading();

        // get the results
        const res = await this.apiService!.Search({
          q: this.value,
          fuzzines: this.fuzzines,
        });

        this.loading = false;

        if (res.status) {
          this.clearResults();

          res.data.forEach((item: any) => this.renderResultItem(item));

          if (res.data.length === 0) {
            this.renderEmptyResult();
          }
        }
      } catch (error) {
        //
      }
    }, 200);
  }

  private renderResultItem(item: any) {
    let template = `template[slot="dotsearch-${item.type}"]`;

    // querySelector of the template exists use the template instead of the default template
    if (this.host.querySelector(template)) {
      let element = this.host.querySelector(template).innerHTML.slice();

      for (let keys of Object.keys(item.data)) {
        const key = `#dotsearch-${item.type}-${keys}`.toUpperCase();
        // replace the key with the value
        element = element.replace(new RegExp(key, 'g'), item.data[keys]);
      }

      // create a new element
      const div = document.createElement('div');
      div.className = 'dotsearch-autocomplete-result-item';
      div.setAttribute('part', 'dotsearch-autocomplete-result-item');

      // add the element to the div
      div.innerHTML = element;

      // add the div to the div.dotsearch-autocomplete-results
      this.host.shadowRoot.querySelector('div.dotsearch-autocomplete-results').appendChild(div);
    } else {
      const a = document.createElement('a');
      a.className = 'dotsearch-autocomplete-result-item';
      a.setAttribute('part', 'dotsearch-autocomplete-result-item');
      a.href = item.data.link;

      const span = document.createElement('span');
      span.innerText = item.data.title || item.data.name || item.data.text;

      a.appendChild(span);

      this.host.shadowRoot.querySelector('div.dotsearch-autocomplete-results').appendChild(a);
    }
  }

  private renderEmptyResult() {
    this.clearResults();

    const div = document.createElement('div');
    div.className = 'dotsearch-autocomplete-result-empty';
    div.innerText = 'داده ای یافت نشد';

    this.host.shadowRoot.querySelector('div.dotsearch-autocomplete-results').appendChild(div);
  }

  private renderLoading() {
    this.clearResults();

    const div = document.createElement('div');
    div.className = 'dotsearch-autocomplete-result-loading';
    div.innerText = 'در حال جستجو...';

    this.host.shadowRoot.querySelector('div.dotsearch-autocomplete-results').appendChild(div);
  }

  private clearResults() {
    this.host.shadowRoot.querySelector('div.dotsearch-autocomplete-results').innerHTML = '';
  }
}
