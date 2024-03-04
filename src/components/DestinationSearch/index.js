// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
class DestinationSearch extends Component {
  state = {searchInput: ''}
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="app-card-container">
          <h1 className="header">Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              className="input-element"
              onChange={this.onChangeSearchInput}
            />
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="cross"
                className="img-btn"
              />
            </div>
          </div>
          <ul className="list-container">
            {searchResults.map(eachValue => (
              <DestinationItem
                destintionDetails={eachValue}
                key={eachValue.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
