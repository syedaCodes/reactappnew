import Button from "./Button";

const SplitTheBillForm = () => {
    return (
        <form className="split-the-bill-form">
            <h2>Split a bill with X</h2>

            <label>
                💰 Bill value <input type="text" />
            </label>
            <label>
                🧍Your expense <input type="text" />
            </label>
            <label>
                👫X`s expense <input type="text" disabled />
            </label>
            <label htmlFor="who-is-paying">
                🤑 Who is paying the bill
                <select name="who-is-paying">
                    <option value="user">You</option>
                    <option value="friend">X</option>
                </select>
            </label>

            <Button>Split bill</Button>
        </form>
    );
};

export default SplitTheBillForm;
