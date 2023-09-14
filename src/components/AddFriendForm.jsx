import { useState } from "react";
import Button from "./Button";

const AddFriendForm = ({ onAddFriend }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        console.log(newFriend);
        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    };

    return (
        <form className="add-friend-form" onSubmit={handleSubmit}>
            <label htmlFor="friend-name">
                👫 Friend name
                <input
                    id="friend-name"
                    type="text"
                    name="friend-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label htmlFor="image-url">
                🌄 Image URL
                <input
                    id="image-url"
                    type="text"
                    name="image-url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </label>
            <Button>Done</Button>
        </form>
    );
};

export default AddFriendForm;
