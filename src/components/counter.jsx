import React, { Component } from 'react';


class Counter extends Component {
    state = { 
        value: this.props.value,
//        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 15,
        fontWeight : 'bold'
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There is No Tag</p>
    
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;

    // }

    // constructor() {                                         // constructor are used to bind "this"
    //         super();                                       //  with the method(function)
    //         this.handleIncrement = this.handleIncrement.bind(this); // using such statement
    // }

    handleIncrement = () => {                              // Arrow functions are used to bind the 
        this.setState({ value : this.state.value + 1   });            // "this" with function , 
    };                                                    // can be used instead of normal constructor         

    handleDecrement = () => {
        this.setState({ value : this.state.value - 1    });
    }
    render() {

        return ( 
        
        <div>
                <span  style={this.styles}  className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} 
                className="btn ml-2 btn-secondary btn-sm">
                Increment</button>
                <button onClick={this.handleDecrement} 
                className="btn ml-2 btn-secondary btn-sm" 
                disabled={!this.state.value}>
                Decrement</button>

                <button onClick={() => this.props.onDelete(this.props.id)} 
                className="btn btn-danger ml-3 btn-sm">
                Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.state;              //  object destruction 
        return ( value === 0 ? "zero" : value ) //   count =  this.state.count 
           }

}

export default Counter ;