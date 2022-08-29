import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './ErrorModal.module.css'
 

export default function Errormodel(props) {
  return (
  <div>
      <div className={classes.backdrop} onClick={props.submit}>
        <Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
       <p>
       {props.message}
        </p> 
    </div>
    <footer onClick={props.submit} className={classes.actions}>
        <Button >okay</Button>
    </footer>
    </Card>
    </div>
  </div>

  )
}
