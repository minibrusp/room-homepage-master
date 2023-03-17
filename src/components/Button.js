
import {useState } from 'react'
import style from '../scss/module/Button.module.scss'

export const Button = ({imgUrl, direction, ...props}) => {
  const { handleButtonClick, navigator } = props
  const [isDisabled, setDisaled] = useState(false)


  const disableOrEnableButtons = () => {
    setDisaled(true)

    setTimeout(() => {
      setDisaled(false)
    }, 600)
  }

  return (
    <>
     <button 
        className={style.button} 
        onClick={(e) => {
          disableOrEnableButtons()
          handleButtonClick(direction)
        }} 
        disabled={isDisabled}
      >
        <img src={imgUrl} alt={`button ${direction}`} />
      </button>
    </>

  )
}

export const LeftButton = props => {
  return (
    <Button {...props} direction="left" />
  )
}
export const RightButton = props => {
  return (
    <Button {...props} direction="right"  />
  )
}


