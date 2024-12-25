import './index.css'

const DenominationItem = props => {
  const {denominationsList, updateBalance} = props
  const {id, value} = denominationsList

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
