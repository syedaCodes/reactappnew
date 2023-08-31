import Button from "./Button";

const SplitTheBillForm = ({ selectedFriend }) => {
    return (
        <form className="split-the-bill-form">
            <h2>
                Split a bill{" "}
                {selectedFriend.name ? `with ${selectedFriend.name}` : ""}
            </h2>

            <label>
                💰 Bill value <input type="text" />
            </label>
            <label>
                🧍Your expense <input type="text" />
            </label>
            <label>
                👫{selectedFriend.name}`s expense <input type="text" disabled />
            </label>
            <label htmlFor="who-is-paying">
                🤑 Who is paying the bill
                <select name="who-is-paying">
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
            </label>

            <Button>Split bill</Button>
        </form>
    );
};

export default SplitTheBillForm;
