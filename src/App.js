import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


/**
 * This class represents the main component of the RoboFriends application.
 * It fetches a list of robots from an external API and allows the user to search for robots by name.
 * The filtered results are displayed in a scrollable list.
 */
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    /**
     * Updates the search field in the component state with the value entered by the user.
     * @param {object} event - The event object representing the input change event.
     */
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    /**
     * Fetches the list of robots from an external API and updates the component state with the received data.
     * This method is called when the component is mounted.
     */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (!robots.length) {
            return (
                <div className='tc'>
                    <h1>Loading</h1>
                </div>
            );
        } else {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;