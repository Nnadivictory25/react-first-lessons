interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}{' '}
          </ul>
          <button onClick={onClear}>Clear</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};

export default Cart;
