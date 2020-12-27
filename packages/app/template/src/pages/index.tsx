import { Button } from 'components/Button'
import { NextPage } from 'next'

const Index: NextPage = () => {
  const handleClick = (): void => {
    console.log('Template NEXTJS')
  }

  return (
    <div>
      <Button label='Componente Button' onClick={handleClick} />
    </div>
  )
}

export default Index
