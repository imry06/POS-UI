
import './App.css'
import ProductItem from './components/ProductItem'

function App() {
  

  return (
    <>
    <h1>TenaciousPOS</h1>
    <ProductItem productName="Sample Product" productImage="https://theaustralianfoodshop.com/wp-content/uploads/2025/10/kitkat-chunky-mini-chocolate-bars-sharepack-16-pack.jpeg" productPrice={20} />
    </>
  )
}

export default App
