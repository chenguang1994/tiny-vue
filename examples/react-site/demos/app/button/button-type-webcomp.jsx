import { Button as TinyButton} from '@pe-3/react'
import ReactDOM from 'react-dom/client'

function App(props) {
  return (<div>
    {props.children}
  </div>)
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyButton type='success'>成功按钮</TinyButton>
      </App>
    )
  }
}