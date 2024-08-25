import 'reset-css';
import App from './components/layout/index.svelte'

// Import our custom CSS
import './style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = new App({
  target: document.getElementById('app'),
})

export default app
