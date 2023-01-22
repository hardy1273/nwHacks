import React from 'react'

function Spinner(message) {
  return (
    <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">{message}</span>
    </div>
  )
}

export default Spinner