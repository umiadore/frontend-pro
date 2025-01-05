import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// здесь происходит импорт компонента для дальнейшего использования 
import App from './App.jsx'

// в этом файле мы находим div c id root и добавляем в него код
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* здесь происходит вызов компонента Арр с версткой */}
    <App />
  </StrictMode>,
)
