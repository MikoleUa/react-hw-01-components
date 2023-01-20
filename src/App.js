import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import friends from "./friends.json";
import user from "./user.json";
import data from "./data.json";
import transactions from "./transactions.json";
export default function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics data={data} />
      <FriendList Friends={friends} />
      <TransactionHistory itemTransaction={transactions} />
    </>
  );
}
