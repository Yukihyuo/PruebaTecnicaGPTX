// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { DataTableDemo } from './app/tabledata'
// import Page from './app/dashboard/page'
import Layout from './components/global/layout'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Layout>
      <div>

        <div className='flex gap-4 justify-between ' >
          <Button onClick={() => { console.log(123) }} >Nuevo</Button>
          <Input type="text" placeholder="Buscar" />
        </div>
        <DataTableDemo />
      </div>
    </Layout>
  )
}

export default App
