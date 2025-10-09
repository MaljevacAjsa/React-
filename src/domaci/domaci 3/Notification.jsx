function Notification({ type, message }) {
  return (
    <p>
      {type === "error"
        ? message
        : type === "warning"
        ? message
        : type === "info"
        ? message
        : "Nepoznata poruka"}
    </p>
  );
}
export default Notification;
