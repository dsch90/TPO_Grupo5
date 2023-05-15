/* barra de navegacion */
class navBar extends HTMLElement{
    connectedCallback() {
      this.innerHTML =`
      <div class="nav">
          <div class="navbar">
            <div class="navbar__wrapper">
              <nav class="navbar__menu">
                    <a href="index.html" class="brand">
                      <img src="" alt="logo" width="40" height="35" class="d-inline-block align-text-top"> CaRent 
                    </a>
                <div id="nav-icon3"><span></span><span></span><span></span><span></span></div>
                <ul class="navbar__nav">
                  <li class="navbar__link after-transform"><a class="menu_link" href="#">Vehiculos</a></li>
                  <li class="navbar__link after-transform"><a class="menu_link" href="servicios.html">Contacto</a></li>
                  <li class="navbar__link after-transform"><a class="menu_link" href="#">Acerca de Nosotros</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="navbar-responsive">
            <ul class="navbar-responsive__nav">
              <li class="navbar-responsive__link after-transform"><a href="#">Vehiculos</a></li>
              <li class="navbar-responsive__link after-transform"><a href="#">Contacto</a></li>
              <li class="navbar-responsive__link after-transform"><a href="#">Acerca de nosotros</a></li>
            </ul>
          </div>
        </div>
      ` 
    }
  }
  customElements.define('my-navbar', navBar)