import React from 'react'

export default function ButtonPrimary({handleClick, title}) {

  const handleClickChile = () => {
    handleClick();
  }

  return (
    <div>
      <button onClick={handleClickChile} style={styles}> {title}</button>
    </div>
  )
}

const styles = {
    color: "white",
    backgroundColor:"red"
}
