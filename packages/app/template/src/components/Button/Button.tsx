import css from './Button.module.scss'

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button data-testid='button' className={css.Button} onClick={onClick}>{ label }</button>
  )
}
