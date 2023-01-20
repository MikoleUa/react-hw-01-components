import s from "./TransactionHistory.module.css";
export default function TransactionHistory({ itemTransaction }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {itemTransaction.map((e) => {
          return (
            <tr key={e.id} className={s.tableRow}>
              <td>{e.type}</td>
              <td>{e.amount}</td>
              <td>{e.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
