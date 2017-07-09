import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component{
  render(){

    var messageList = this.props.messages.map(message => {
      return <Message key={message.id} message={message} />
    })

    return (
      <ul>{messageList}</ul>
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

export default MessageList
