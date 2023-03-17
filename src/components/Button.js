
import style from '../scss/module/Button.module.scss'

export const Button = ({imgUrl, direction, ...props}) => {
  const { handleButtonClick } = props
  return (
    <>
     <button className={style.button} onClick={() => handleButtonClick(direction)} >
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


