class Greeter extends React.Component {
        render() {
          return <h1>React Test</h1>;
        }
      }

ReactDOM.render(
        <Greeter/>,
        document.getElementById('app')
)