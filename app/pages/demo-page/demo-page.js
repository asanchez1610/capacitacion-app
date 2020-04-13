import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@capacitacion-cells/navigation-menu';
import '@capacitacion-cells/capacitacion-behavior';

const utilBehavior = CellsBehaviors.capacitacionBehavior;
class DemoPage extends utilBehavior(CellsPage) {
  static get is() {
    return 'demo-page';
  }

  constructor() {
    super();
  }

  static get properties() {
    return {

    };
  }

  onPageEnter() {
    console.log('Page loaded');
  }

  onPageLeave() {
    console.log('Page unloaded');
  }

  render() {
    return html`
    <style>${this.constructor.shadyStyles}</style>

      <cells-template-paper-drawer-panel mode="seamed">
        <div slot="app__main">
          <navigation-menu  .options = ${window.AppConfig.optionsMenu} ></navigation-menu>
        </div>
     </cells-template-paper-drawer-panel>`;
  }

  static get shadyStyles() {
    return `

    `;
  }
}

window.customElements.define(DemoPage.is, DemoPage);

