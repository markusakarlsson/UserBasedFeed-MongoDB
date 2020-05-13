import React, { createContext } from "react";

const defaultState = {
    isOpen: false,
    closeDiv: () => {}
  };


const Context = createContext(defaultState)


export class Provider extends React.Component {
    constructor(props) {
        super(props);
    
    this.state = {
        isOpen: false,
        closeDiv: this.closeDiv,
    }
}

    closeDiv = () => {
        this.setState({
            isOpen: false
        })
        console.log("hejsan")
    }

    render() {
        return (
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
        );
      }
}


export const Consumer = Context.Consumer;