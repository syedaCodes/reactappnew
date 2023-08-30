import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import FriendsList from "./FriendsList";
import SplitTheBillForm from "./SplitTheBillForm";

const defaultFriends = [
    {
        id: 118836,
        name: "Jane",
        image: "https://i.pravatar.cc/48?img=24",
        balance: -7,
    },
    {
        id: 933372,
        name: "Anne",
        image: "https://i.pravatar.cc/48?img=32",
        balance: 20,
    },
    {
        id: 4499476,
        name: "Sophie",
        image: "https://i.pravatar.cc/48?img=45",
        balance: 0,
    },
];

const SplitTheBill = () => {
    const [friends, setFriends] = useState(defaultFriends);
    const [isAddFriendForm, setAddFriendForm] = useState(false);

    const showAddFriendForm = () => setAddFriendForm((showForm) => !showForm);

    const handleAddFriend = (friend) => {
        setFriends((friends) => [...friends, friend]);
        setAddFriendForm(false);
    };

    return (
        <>
            <div className="sidebar">
                <FriendsList friends={friends} />

                {/* Add Friend Form */}
                {isAddFriendForm && (
                    <AddFriendForm onAddFriend={handleAddFriend} />
                )}

                {/* Add Friend Form Switch */}
                <Button onHandleClick={showAddFriendForm}>
                    {isAddFriendForm ? "Close" : "Add friend"}
                </Button>
            </div>
            <div className="main">
                <SplitTheBillForm />
            </div>
        </>
    );
};

export default SplitTheBill;
