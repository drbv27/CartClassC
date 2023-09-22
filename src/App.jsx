import { Component } from 'react'
import Productos from '../components/Productos'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

export class App extends Component {
  state = {
    productos :[
      { name:'Laptop', price:2500, img:'/laptop.png' },
      { name:'Phone', price:1500, img:'/phone.png' },
      { name:'Speaker', price:800, img:'/speaker.png' },
    ]
  }

  agregarAlCarro = (producto) => {
    console.log(producto)
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Layout>
          <Title/>
          <Productos
            productos ={ this.state.productos }
            agregarAlCarro={ this.agregarAlCarro }
          />
        </Layout>
      </div>
    )
  }
}

export default App
