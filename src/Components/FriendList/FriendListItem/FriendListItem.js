import s from "./FriendListItem.module.css";

export default function FriendListItem({ friend }) {
  return (
    <li className={s.item}>
      <span className={friend.isOnline ? s.isOnline : s.isOfline}>&bull;</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
}
