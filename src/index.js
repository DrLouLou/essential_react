import React from 'react';
import ReactDOM from 'react-dom';

let messageList = [
  {"msg": "Hi, how are you?", "date": "01/06/2020"},
  {"msg": "I'm well; how about you?", "date": "02/06/2020"},
  {"msg": "Very good thank you.", "date": "03/06/2020"}
]

const Message = (props) => {
  return (
    <section>
      <h1>{props.msg}</h1>
      <p>{props.date}</p>
    </section>
  )
}

const Chat = ({messageList}) => {
  return (
    <div>
      {messageList.map(
        message => <Message msg = {message.msg} date = {message.date}/>
      )}
    </div>
  )
}

ReactDOM.render(
  <Chat messageList = {messageList} />,
  document.getElementById("root")
)

// -----------------------------------------------------------

const Ripe = () =>
  <div>
    <p>This piece of fruit is deliciously ripe.</p>
  </div>

const notRipe = () =>
  <div>
    <p>This piece of fruit is not ripe.</p>
  </div>

class Fruit extends React.Component {
  state = {
    ripe : true
  }

  render() {
    return (
      <div>
        {this.state.ripe? <Ripe/> : <notRipe/>}
      </div>
    )
  }
}

ReactDOM.render(<Fruit/>, document.getElementById('root'))

// -------------------------------------------------------------

const On = () =>
  <div>
    <p>This component is on.</p>
  </div>

const notOn = () =>
  <div>
    <p>This component is not on.</p>
  </div>

class Button extends React.Component {
  state = { switch : on }

  render () {
    return (
      <div>
        {this.state.switch? <On/> : <notOn/>}
      </div>
    )
  }
}

ReactDOM.render(<Button/>, document.getElementById('root'))

const On = () =>
  <div>
    <p>This component is on.</p>
  </div>

const notOn = () =>
  <div>
    <p>This component is not on.</p>
  </div>

class Button extends React.Component {
  state = { switch : on }

  render () {
    return (
      <div>
        {this.state.switch? <On/> : <notOn/>}
      </div>
    )
  }
}

ReactDOM.render(<Button/>, document.getElementById('root'))



















