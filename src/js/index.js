import React from 'react';
import ReactDom from 'react-dom';

// var App = React.createClass({
//     getDefaultProps:function(){
//        console.log('getDefaultProps');
//        return {
//            name:'ccc'
//        }
//     },
//     getInitialState:function(){
//         console.log('getInitialState');
//         return {
//             value:'input'
//         }
//     },
//     componentWillMount:function(){
//         console.log('componentWillMount');
//     },
//     componentDidMount:function(){
//         console.log('componentDidMount');
//         var self = this;
//         setTimeout(function(){
//             self.setState({value:'output'});
//         },2000)
//     },
//     shouldComponentUpdate:function(nextProps,nextState){
//         console.log('shouldComponentUpdate',nextProps,nextState);
//         return true;
//     },
//     componentWillUpdate:function(){
//         console.log('componentWillUpdate');
//     },
//     componentDidUpdate:function(){
//        console.log('componentDidUpdate');
//     },
//     render:function(){
//         console.log('render');
//         var factory = 'duyi';
//         // console.log(this.props.data);
//         return (
//             <div>
//                <h1>{factory}</h1>
//                <ul>
//                  {
//                      this.props.data.map(function(ele,index){
//                          return <li key={index}>{ele}</li>
//                      })
//                  }
//                </ul>
//             </div>
//         )
//     }
// });

// var dataList = ['ying','cying','likefree'];

// ReactDom.render(
//     <App data={dataList}/>,
//     document.getElementById('root')
// );



var Search = React.createClass({
    getInitialState:function(){
        return {
            value:'please input'
        }
    },
    onHandleChange:function(){
       this.setState({value:this.refs.inp.value});
    },
    render:function(){
        console.log(this.state.value);
        return (
            <div>
               <input type='text' ref='inp' value={this.state.value} onChange={this.onHandleChange}></input>
               <span>{this.state.value}</span>
            </div>
        )
    }
})

ReactDom.render(
    <Search/>,
    document.getElementById('root')
)