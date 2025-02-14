import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvider } from "./store/todos.tsx"
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TodosProvider>
    <App />
    </TodosProvider>
    </BrowserRouter>
  </StrictMode>,
)

//git remote add origin https://github.com/Developer-Sayak/react_TS_TODO.git
// git branch -M main
// git push -u origin main