import React from 'react'
import spinner from '../assessts/spinner.gif'


function Spinner() {
    const styles = {
        width:'100px',
        display:'block',
        margin:'auto'
    }
  return (
    <img style = {styles}src={spinner} alt='spinner'/>
  )
}

export default Spinner