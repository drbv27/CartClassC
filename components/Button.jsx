import { Component } from 'react'

const styles = {
    button:{
        backgroundColor: '#003554',
        color:'#fff',
        padding:'15px 20px',
        border:'none',
        borderRadius:'5px',
        cursor:'pointer'
    }
}

class Button extends Component {
  render() {
    return (
      <button style={styles.button} {...this.props}/>
    )
  }
}

export default Button