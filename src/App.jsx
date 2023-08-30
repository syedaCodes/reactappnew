import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";

function App() {
    return (
        <div className="wrapper">
            <h1>Split the bill</h1>

            <div className="container">
                <div className="sidebar">
                    <FriendsList />
                    <AddFriendForm />
                    <Button>Add friend</Button>
                </div>
                <div className="main"></div>
            </div>
        </div>
    );
}

export default App;
