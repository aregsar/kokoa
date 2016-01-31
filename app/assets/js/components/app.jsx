import React from "react"

export default class App extends React.Component {
    
    constructor(){
        super();
        this.state = { data: 0 }      
    };
          
    render = () => {
         
        console.log(this.state.data);
       
        return (
            <div>Hello React {this.state.data}</div>
        );
    };
     
    componentDidMount = () => {
        this.fetchComments();
        //setInterval(this.fetchComments, this.props.interval);
        window.setInterval(this.fetchComments, 1000);
    };

    fetchComments = () => {
        this.setState({data: this.state.data + 1})
        // $.ajax({
        //     url: this.props.url,
        //     dataType: 'json',
        //     success: (data) => {
        //         this.setState({data: data});
        //     },
        //     error: (xhr, status, err) => {
        //         console.error(this.props.url, status, err.toString());
        //     }
        // });
    };
};