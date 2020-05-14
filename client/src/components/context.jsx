import React from "react";
import axios from "axios";


const Context = React.createContext()


export class Provider extends React.Component { 
   state = {
    }



    render() {
      const { getAllPosts } = this
        return (
          <Context.Provider value={{
            getAllPosts
          }}>
            {this.props.children}
          </Context.Provider>
        );
      }
}

export default Context;

export const Consumer = Context.Consumer; 