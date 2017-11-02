import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFriends } from '../actions/index';

class FriendList extends React.Component {
    render() {
        return (
            <div className="friend-list">
                { this.renderFriends() }
            </div>
        )
    }

    renderFriends() {
        return this.props.friends.map(friend => {
            return (
                <div key={friend.name} className="friend">
                    <div className="friend__name">{ friend.name }</div>
                    <div className="friend__age">{ friend.age }</div>
                    <div className="friend__email">{ friend.email }</div>
                </div>
            );
        });
    }

    componentDidMount() { //calling the action
        this.props.fetchFriends();
    }
}

function mapStateToProps(state) { //the whole application state
    return { //this object is going to be added to this.props
        friends: state.friends
    };
}

function mapDispatchToProps(dispatch) { //handles the actual handling of action creator and returns a method
    return bindActionCreators(
        {
            fetchFriends: getFriends //dispatching off of mapstoprops
        },
        dispatch
    )
}

export default connect(mapStateToProps, { getFriends })(FriendList);