import * as React from 'react';
import SingUp from './SingUp';

import './style.css';

export default function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SingUp />
        </div>
      </div>
    </div>
  );
}
