import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './pages/Layout.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="flex justify-between items-center py-12 px-12">
            <Layout>
                <App/>
            </Layout>
        </div>
    </StrictMode>,
)
