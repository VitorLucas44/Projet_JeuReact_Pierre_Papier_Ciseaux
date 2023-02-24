import React, { useState } from 'react'
import RockShape from './../img/icon-rock.svg'
import PaperShape from './../img/icon-paper.svg'
import ScissorsShape from './../img/icon-scissors.svg'

const SHAPES_MAP = {
  rock: { icon: RockShape, shapeClass: 'shape_rock' },
  paper: { icon: PaperShape, shapeClass: 'shape_paper' },
  scissors: { icon: ScissorsShape, shapeClass: 'shape_scissors' },
}

const Shape = ({ handlePlay, name }) => {
  const [countdown, setCountdown] = useState(null);

  const handleClick = () => {
    if (handlePlay) {
      setCountdown(3);
      const timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        setCountdown(null);
        handlePlay(name);
      }, 4000);
    }
  }
  

  return (
    <div className={`shape-box ${name}-box`}>
      <button
        onClick={handleClick}
        disabled={countdown !== null}
        className={`shape-button ${SHAPES_MAP[name].shapeClass}`}
        id={name}
        title={name}
      >
        {countdown !== null ? `${countdown}` : <img src={SHAPES_MAP[name].icon} alt={name} />}
      </button>
    </div>
  )
}

export default Shape
