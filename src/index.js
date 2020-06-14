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
        message => <Message msg = {message.content} date = {message.date}/>
      )}
    </div>
  )
}

ReactDOM.render(
  <Chat messageList = {messageList} />,
  document.getElementById("root")
)
