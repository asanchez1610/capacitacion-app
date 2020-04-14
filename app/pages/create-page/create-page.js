import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@capacitacion-cells/navigation-menu';
import '@capacitacion-cells/capacitacion-behavior';
import '@capacitacion-cells/capacitacion-list';

const utilBehavior = CellsBehaviors.capacitacionBehavior;
class CreatePage extends utilBehavior(CellsPage) {
  static get is() {
    return 'create-page';
  }

  constructor() {
    super();
  }

  static get properties() {
    return {

    };
  }

  async loadData() {
    let data = await fetch(`${this.services.host}/${this.services.endPoints.personas}`).then(response => response.json());
    this.shadowRoot.querySelector('capacitacion-list').data = data;
  }

  onPageEnter() {
    console.log('Page loaded');
    this.loadData();
  }

  onPageLeave() {
    console.log('Page unloaded');
  }

  render() {
    return html`
    <style>${this.constructor.shadyStyles}</style>
      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__main">
           <div class = "container">

            <capacitacion-list></capacitacion-list>

          </div>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  static get shadyStyles() {
    return `
    * {
      font-family: var(--cells-fontDefault, sans-serif);
    }
    .container {
      margin-top:50px;
    }
    `;
  }
}

window.customElements.define(CreatePage.is, CreatePage);

