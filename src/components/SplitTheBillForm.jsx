import { useState } from "react";
import Button from "./Button";

const SplitTheBillForm = ({ selectedFriend, onSplitBill }) => {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUsed] = useState("");

    const paidByFriend = bill ? bill - paidByUser : "";

    const [whoIsPaying, setWhoIsPaying] = useState("user");

    //check why are the calculations wrong

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bill || !paidByUser) return;

        //we need to update the friends array so the list is updated with the status of balance
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    };

    return (
        <form className="split-the-bill-form" onSubmit={handleSubmit}>
            <h2>
                Split a bill
                {selectedFriend.name ? ` with ${selectedFriend.name}` : ""}
            </h2>

            <label>
                💰 Bill value
                <input
                    type="text"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))} //Bill total
                />
            </label>
            <label>
                🧍Your expense
                <input
                    type="text"
                    value={paidByUser}
                    onChange={(e) =>
                        setPaidByUsed(
                            Number(e.target.value) > bill
                                ? paidByUser
                                : Number(e.target.value)
                        )
                    } //how much is your share
                />
            </label>
            <label>
                👫{selectedFriend.name}`s expense
                <input type="text" disabled value={paidByFriend} />
            </label>
            <label htmlFor="who-is-paying">
                🤑 Who is paying the bill
                <select
                    name="who-is-paying"
                    value={whoIsPaying}
                    onChange={(e) => setWhoIsPaying(e.target.value)}
                >
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
            </label>

            <Button>Split bill</Button>
        </form>
    );
};

export default SplitTheBillForm;
