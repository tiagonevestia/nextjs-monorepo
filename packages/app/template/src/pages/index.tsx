import * as React from 'react'
import { NextPage } from 'next'

const Index: NextPage = () => {
  const handleClick = (): void => {
    console.log('Template NEXTJS')
  }

  return (
    <div>
      <button onClick={handleClick}>Template NEXTjs</button>
    </div>
  )
}

export default Index
