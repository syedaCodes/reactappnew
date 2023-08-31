import Friend from "./Friend";

const FriendsList = ({ friends, onHandleSelect, selectedFriend }) => {
    return (
        <ul className="friends-list">
            {friends.map((friend) => (
                <Friend
                    key={friend.id}
                    friend={friend}
                    onHandleSelect={onHandleSelect}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
};

export default FriendsList;
