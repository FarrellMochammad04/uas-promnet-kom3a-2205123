import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
          <div className="container">
            <a className="navbar-brand" href="/">
            私の店(My Store)
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavbarComponent;
