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
    ],
    carro: [],
    esCarroVisible: false,
  }
  agregarAlCarro = (producto) => {

    const { carro } = this.state
    if(carro.find(pdt => pdt.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x
      )
      return this.setState({ carro:newCarro })
    }

    return this.setState({ 
      carro:this.state.carro.concat({
        ...producto,
        cantidad:1,
      }) })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  disminuirCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(pdt => pdt.name === producto.name && pdt.cantidad > 1)){
      const newCarro = carro.map(x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad - 1
        })
        : x
      )
      return this.setState({ carro:newCarro })
    }
    const newCarro = carro.filter(x => x.name !== producto.name)
    this.setState({ carro:newCarro }) 
  }

  render() {
    const { esCarroVisible } = this.state
    console.log(esCarroVisible)
    return (
      <div>
        <Navbar 
        carro={this.state.carro}
        esCarroVisible={esCarroVisible}
        mostrarCarro={this.mostrarCarro}
        disminuirCarro={this.disminuirCarro}
        />
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
