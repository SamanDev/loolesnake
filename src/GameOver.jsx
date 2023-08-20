import React, { useEffect } from 'react'
import $ from 'jquery'
function GameOver(props) {
  useEffect(() => {
    $.post(
      'https://code.loole.money/encrypt',
      {
        data: props.score,
      },
      function (data) {
        window.parent.postMessage('snakescore' + data.encryptedData, '*')
      }
    )
    return () => {}
  }, [])

  return (
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}>
      <div id='GameOver' style={{ fontSize: props.width / 15 }}>
        <div id='GameOverText'>GAME OVER</div>
        <div>Your score: {props.score}</div>
        <div>
          {props.newHighScore ? 'New local ' : 'Local '}high score:{' '}
          {props.highScore}
        </div>
        <div id='PressSpaceText'>Press Space to restart</div>
      </div>
    </div>
  )
}

export default GameOver
