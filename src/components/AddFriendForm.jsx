import Button from "./Button";

const AddFriendForm = () => {
    return (
        <form className="add-friend-form">
            <label>
                👫 Friend name <input type="text" name="friend-name" />
            </label>
            <label>
                🌄 Image URL <input type="text" name="image-url" />
            </label>
            <Button>Done</Button>
        </form>
    );
};

export default AddFriendForm;
