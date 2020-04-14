import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '@cells-components/cells-template-paper-drawer-panel';
import '@bbva-web-components/bbva-header-main';
import '@capacitacion-cells/navigation-menu';
import '@capacitacion-cells/capacitacion-behavior';
import '@capacitacion-cells/capacitacion-form';

const utilBehavior = CellsBehaviors.capacitacionBehavior;
class DemoPage extends utilBehavior(CellsPage) {
  static get is() {
    return 'demo-page';
  }

  constructor() {
    super();
  }

  registrarPersona(e) {
    if (e.detail.nombres) {
      fetch(`${this.services.host}${this.services.endPoints.personas}`, {
        method: 'POST',
        body: JSON.stringify(e.detail),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => this.shadowRoot.querySelector('capacitacion-form').reset());
    }
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
        <div slot="app__main"  >
          <div class = "container">
            <div class = "panel">
              <div class = "headerPanel">Registro</div>
              <div class = "bodyPanel">
                <capacitacion-form @crear-persona-event = ${this.registrarPersona} ></capacitacion-form>
              </div>
            </div>

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
        margin:70px 10px 10px 10px;
      }

      .headerPanel {
        padding:15px;
        border-bottom:1px solid #e1e1e1;
        background-color:#f4f4f4;
        color:#121212;
        text-transform: uppercase;
        font-size:0.9em;
        font-weight:bold;
      }

      .bodyPanel {
        padding:10px 15px;
      }

      .panel {
        margin:auto;
        width:350px;
        border:1px solid #e1e1e1;
        box-shadow: 1px 2px 0px 0px rgba(0,0,0,0.2);
      }
    `;
  }
}

window.customElements.define(DemoPage.is, DemoPage);

