import { Button } from 'components/Button'
import { NextPage } from 'next'
import { capitalize } from '@tia/functions'

const Index: NextPage = () => {
  const handleClick = (): void => {
    console.log('Template NEXTJS')
  }

  return (
    <div>
      <Button label={capitalize('componente button')} onClick={handleClick} />
    </div>
  )
}

export default Index
