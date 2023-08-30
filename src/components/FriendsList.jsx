import Friend from "./Friend";

const FriendsList = ({ friends }) => {
    return (
        <ul className="friends-list">
            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    );
};

export default FriendsList;
