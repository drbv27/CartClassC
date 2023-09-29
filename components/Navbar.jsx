import { Component } from 'react'
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:'100px',
        justifyContent:'space-between',
        position:'relative',
        padding:'0 3rem',
        boxShadow:'0 2px 3px rgb(0,0,0,0.1'
    }
}

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro, disminuirCarro } = this.props
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro 
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
          disminuirCarro={disminuirCarro}
        />
      </nav>
    )
  }
}

export default Navbar