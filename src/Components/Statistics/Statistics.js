import s from "./Statistics.module.css";

export default function Statistics(props) {
  const { data } = props;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {data.map((data) => {
          return (
            <li key={data.id} className={s.item}>
              <span className="label"> {data.label}</span>
              <span className="percentage">{data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
