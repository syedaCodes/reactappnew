import FriendsList from "./components/FriendsList";

function App() {
    return (
        <div className="wrapper">
            <h1>Split the bill</h1>

            <div className="container">
                <FriendsList />
                <div className="main"></div>
            </div>
        </div>
    );
}

export default App;
