function StatusMessage({ status }) {
  return (
    <p>
      {status === "loading"
        ? "ucitavanje"
        : status === "error"
        ? "Došlo je do greške"
        : status === "success"
        ? "Uspešno učitano"
        : "Nepoznat status"}
    </p>
  );
}
export default StatusMessage;
