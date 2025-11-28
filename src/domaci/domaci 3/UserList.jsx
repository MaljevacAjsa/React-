function UserList({ users }) {
  if (users.length === 0) {
    return <p>Nema korisnika u listi</p>;
  }

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - {user.age >= 18 ? "Punoletan" : "Maloletan"}
        </li>
      ))}
    </ul>
  );
}
export default UserList;
