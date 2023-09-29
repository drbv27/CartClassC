import  { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro:{
        backgroundColor: '#006494',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20,
      }
}

class Carro extends Component {
  render() {
    const { carro,esCarroVisible, mostrarCarro,disminuirCarro } = this.props
    const cantidad = carro.reduce((acc,item)=> acc + item.cantidad, 0)
    console.log(carro)
    return (
      <div>
        <span style={styles.bubble}>
          { cantidad !== 0 
            ? <BubbleAlert value={cantidad}/> 
            : null 
          }
        </span>
        <button 
          style={styles.carro}
          onClick={mostrarCarro}
          >Cart
        </button>
        {esCarroVisible 
          ? <DetallesCarro carro={carro} disminuirCarro={disminuirCarro}/> 
          : null
        }
      </div>
    )
  }
}

export default Carro