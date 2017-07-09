import React, {Component} from 'react';
import Channel from './Channel';

class ChannelList extends Component{
  render(){

    var channelList = this.props.channels.map( chan => {
      return <Channel
        channel={chan}
        key={chan.id} {...this.props} />
    });

    return (
      <ul>
        {channelList}
      </ul>
    )
  }
}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
}

export default ChannelList
