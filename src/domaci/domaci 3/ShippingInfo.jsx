function ShippingInfo({ isMember, totalPrice }) {
  return (
    <p>
      {isMember && totalPrice > 500
        ? "Besplatna dostava"
        : "Dostava se plaća 300 dinara"}
    </p>
  );
}
export default ShippingInfo;
