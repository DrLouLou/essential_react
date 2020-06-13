import React from 'react';
import ReactDOM from 'react-dom';

const Message = (props) => {
  return (
    <section>
      <h1>{props.msg}</h1>
    </section>
  )
}

const Chat = () => {
  return (
    <section>
      <Message msg='Hey, there.'/>
      <Message msg='Hi.'/>
      <Message msg='How are you?'/>
      <Message msg='Good.'/>
    </section>
  )
}

ReactDOM.render(
  <Chat/>,
  document.getElementById("root")
)
