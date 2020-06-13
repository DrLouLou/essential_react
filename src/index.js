import React from 'react';
import ReactDOM from 'react-dom';

// class Message extends React.Component {
//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>{this.props.msg}</h1>
//       </div>
//     )
//   }
// }

const Message = (props) => {
  console.log(props)
  return (
    <h1>{props.msg}</h1>
  )
}

ReactDOM.render(
  <Message msg='Hello, World!'/>,
  document.getElementById("root")
)
