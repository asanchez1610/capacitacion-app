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
    this.updateComplete.then(() => {
      document.querySelector('navigation-menu').options = window.AppConfig.optionsMenu;
    });
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
    <div class = "container">Pagina Inicial</div>
    `
  }

  static get shadyStyles() {
    return `
      .container {
        margin-top:50px;
      }
    `;
  }
}

window.customElements.define(DemoPage.is, DemoPage);

