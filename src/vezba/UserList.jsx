import { use } from "react";

function UserList(props) {
  if (!props.users || props.users === "") return NULL;
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
