import React from 'react'
import bonusItems from '../data/bonusItems'
import { v1 as generateUniqueID } from 'uuid'

function Cart({ adopt, handleCart }) {

  const total = adopt.reduce((prev, next) => { return prev + next.amount }, 0)

  var bonus = null
  if (total >= 100 && total < 300) bonus = bonusItems.slice(0, 1)
  else if (total >= 300 && total < 500) bonus = bonusItems.slice(0, 2)
  else if (total >= 500 && total < 1000) bonus = bonusItems.slice(0, 3)
  else if (total >= 1000) bonus = bonusItems.slice(0, 4)

  return (
    <div className='Cart'>
      <h2>Discount: {adopt.length >= 3 ? '10' : '0'}%</h2>
      <h4>Total: ${total || '0'}</h4>
      {adopt.length > 0 && (<ol>
        {
          adopt.map((item, i) => {
            return <li key={generateUniqueID()}>{item.name}: ${item.amount} <button onClick={() => handleCart(i)}>Delete</button></li>
          })
        }
      </ol>
      )
      }
      {
        bonus && (
          <ul>
            {
              bonus.map((item, i) => {
                return <li key={i}>{item}</li>
              })
            }
          </ul>
        )
      }
    </div>
  )
}

export default Cart