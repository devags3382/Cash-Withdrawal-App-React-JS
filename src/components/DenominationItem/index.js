import './index.css'

const DenominationItem = props => {
  const {denominationDetails, UpdateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    UpdateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denominatio-button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
