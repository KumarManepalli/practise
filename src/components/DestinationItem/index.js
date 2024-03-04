// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="list-items">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
