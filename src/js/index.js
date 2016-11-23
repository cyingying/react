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



// var Search = React.createClass({
//     getInitialState:function(){
//         return {
//             value:'please input'
//         }
//     },
//     onHandleChange:function(){
//        this.setState({value:this.refs.inp.value});
//     },
//     render:function(){
//         console.log(this.state.value);
//         return (
//             <div>
//                <input type='text' ref='inp' value={this.state.value} onChange={this.onHandleChange}></input>
//                <span>{this.state.value}</span>
//             </div>
//         )
//     }
// })

// ReactDom.render(
//     <Search/>,
//     document.getElementById('root')
// )


var Mask = React.createClass({
    render:function(){
        var styles = {
            position:'absolute',
            left:0,
            right:0,
            top:0,
            bottom:0,
            background:'black',
            opacity:0.5,
            display:'block',
        };
        if(this.props.show){
            styles.display = 'block';
        }else{
            styles.display = 'none';
        }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
})

var Dialog = React.createClass({
    render:function(){
        var styles = {
            width:'100%',
            height:200,
            lineHeight:'200px',
            textAlign:'center',
            color:'black',
            background:'orange',
        };
        return (
            <div>
                <Mask show={this.props.show}>
                   <div style={styles} onClick={this.props.onshowClick}></div>
                </Mask>
            </div>
        )
    }
})


var App = React.createClass({
    getInitialState:function(){
        return {
            show:true
        }
    },
    onHandleClick:function(){
       this.setState({show:false})
    },
    render:function(){
        return (
            <div>
               <Dialog show={this.state.show} onshowClick={this.onHandleClick}/>
            </div>
        )
    }
})

ReactDom.render(
    <App/>,
    document.getElementById('root')
)