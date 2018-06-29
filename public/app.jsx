// var Greeter = createReactClass({
//         render: function() {
//                 return (
//                         <div>
//                                 <h1>Hello React! e</h1>
//                         </div>
//                 )
//         }
// })



class Greeter extends React.Component {
        render() {
          return <h1>React Test</h1>;
        }
      }

ReactDOM.render(
        <Greeter/>,
        document.getElementById('app')
)