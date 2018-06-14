import React, { Component } from 'react';

class CustomDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: 'OR',
            selections: [],
            showDropMenu: false
        };
        this.handleAllRadioClick = this.handleAllRadioClick.bind(this);
        this.handleAnyRadioClick = this.handleAnyRadioClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }
    handleAllRadioClick(event) {
        this.setState({operator: 'AND'});
    }
    handleAnyRadioClick(event) {
        this.setState({operator: 'OR'});
    }
    handleItemClick(event) {
        event.nativeEvent.stopPropagation();
        const item = event.target.value;
        let selections = [...this.state.selections];
        const itemSelected = selections.some((sItem) => sItem === item);
        if(itemSelected) {
            const itemIndex = selections.indexOf(item);
            selections.splice(itemIndex, 1);
            this.setState({selections, showDropMenu: true});
        } else {
            selections.push(item); 
            this.setState({selections, showDropMenu: true});
        }
    }
    render() {
        console.log("this.state : ", this.state);
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <div className="dropdown">
                        <button 
                            className="btn btn-secondary dropdown-toggle" 
                            type="button" id="dropdownMenuButton" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            >
                            Dropdown button
                        </button>
                        <div className={this.state.showDropMenu ? "dropdown-menu show" : "dropdown-menu"} >
                            <div className="dropdown-item">
                                <input type="radio" checked={this.state.operator === "AND"} 
                                    onChange={this.handleAllRadioClick}
                                /> All
                                <span>&nbsp; &nbsp;</span>
                                <input type="radio" checked={this.state.operator === "OR"} 
                                    onChange={this.handleAnyRadioClick}
                                /> Any
                            </div>
                            <div className="dropdown-divider"></div>
                            <button 
                                className={this.state.selections.some((sItem) => sItem === 'one') ? "dropdown-item active" : "dropdown-item"} 
                                value="one"
                                onClick={this.handleItemClick}
                            >Option One</button>
                            <button 
                                className={this.state.selections.some((sItem) => sItem === 'two') ? "dropdown-item active" : "dropdown-item"} 
                                value="two"
                                onClick={this.handleItemClick}
                            >Option Two</button>
                            <button 
                                className={this.state.selections.some((sItem) => sItem === 'three') ? "dropdown-item active" : "dropdown-item"} 
                                value="three"
                                onClick={this.handleItemClick}
                            >Option Three</button>
                            <button 
                                className={this.state.selections.some((sItem) => sItem === 'four') ? "dropdown-item active" : "dropdown-item"} 
                                value="four"
                                onClick={this.handleItemClick}
                            >Option Four</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    {this.state.operator && 
                        this.state.selections.length > 0 && 
                        <label>
                            Operator : {this.state.operator.toUpperCase()} <br />
                            Selections : {this.state.selections.map((item, index) => { 
                                return "Option " + item + (index === (this.state.selections.length - 1) ? "" : ", ");
                            })}
                        </label>                       
                    }
                </div>
            </div>
        );
    }
}

export default CustomDropdown;
