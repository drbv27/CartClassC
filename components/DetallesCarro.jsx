import { Component } from 'react'

const styles = {
    detallesCarro:{
        backgroundColor:'#fff',
        position:'absolute',
        marginTop:30,
        boxShadow:'1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius:'5px',
        width:'300px',
        right:50,
    },
    ul:{
        margin:0,
        padding:0,
    },
    producto:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom:'solid 1px #aaa',
    },
    imagen:{
        boxShadow:'1px 5px 5px rgb(0,0,0,0.4)',
    }
}

class DetallesCarro extends Component {
  render() {
    const { carro, disminuirCarro } = this.props
    console.log(carro)
    return (
    <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
            {carro.map((pdt)=>
                <li key={pdt.name} style={styles.producto}>
                    <img 
                        alt={pdt.name} 
                        src={pdt.img} 
                        width="50" 
                        height="32" 
                        style={styles.imagen}
                    />
                    {pdt.name}
                    <span>{pdt.cantidad}</span>
                    <button onClick={()=>disminuirCarro(pdt)}>-</button>
                    <button>+</button>
                    <button>X</button>
                </li>
            )}
        </ul>
    </div>
    )
  }
}

export default DetallesCarro