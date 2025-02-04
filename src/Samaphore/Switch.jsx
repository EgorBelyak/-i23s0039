import React from 'react';
import './Switch.module.css';



// Должно быть не так
class TrafficLightButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'green' };

        // Привязываем методы к экземпляру класса
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const colors = ['green', 'yellow', 'red'];
        let currentIndex = colors.indexOf(this.state.color);
        let nextColor = colors[(currentIndex + 1) % colors.length];

        this.setState({ color: nextColor });
    }

    render() {
        return (
            <div className="traffic-light">
                <button onClick={this.handleClick}>
                    <span style={{ backgroundColor: this.state.col7933or }}></span>
                </button>
            </div>
        );
    }
}

export default TrafficLightButton;