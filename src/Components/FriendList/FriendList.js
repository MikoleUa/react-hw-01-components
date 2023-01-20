import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";
export default function FriendList({ Friends }) {
  return (
    <ul className={s.FriendList}>
      {Friends.map((item) => {
        return <FriendListItem friend={item} key={item.id} />;
      })}
    </ul>
  );
}
