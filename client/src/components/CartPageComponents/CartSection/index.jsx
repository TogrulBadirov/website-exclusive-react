import "./index.scss";

const CartSection = () => {
  return (
    <section id="cart">
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1704067200&Signature=lh~PSVZ4f5ZBRG-rmhpB1xLYGKIBAd81IXbhcYnS~V44M0jORkEENiphfnBIuZ8HN3qV~oc8qjaRcCDvVcO~aYRGbqeeooZT9qKWUVN-rREEc8qg0DIM5ezUf3SeKFoD6sQEVqlP5tIsts3Yjxd2SnADQg1yY3Kp0rdYkhYAle2g66hRUHcEY8uEc~qDbUqkwEcZWmc3fThKuaC8prsuA9tBfg4u6A7vMKcyQzwBpXCz6M1O5z7-Rsxvif~yrARPwHBT95bfLuBn56geI9UxcW1u3rxwAJ1smK~CVJ-TT9~eppiifbINmOVPVZgNEOL8CiKTcZo3sN3zAnHCb9pwdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
                <span>
                LCD Monitor
                </span>
              </td>
              <td>
                <span>$650</span>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>
                <span>$650</span>
              </td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1704067200&Signature=kgqazTkPk~QsW9Lv8NLxuNDD1uFF-41XB7p81l0Z1cCRNGtq669eZoVKGy7ZGw3mBNkNKKKw1i3yw2rSaumYB3qCfsv7evwq8TrT9zxQSE83GdMLM5jiZVEvN7D2sK1D3niLRhWxX6RBaDrmlDjIlLvpcKiwagSyZaBtBYyDBODeMKHqIkUJbmTeKpixe1Bk1dnHI3JXx0~OV0V4kVpVtUbtFN8o5uirgiSrtXGeb3R--YDUiE9vzopJ5zk6pIn1mlA5jmNa2rb~ySmLmqGXCI9Bs-v6X9zqIcrXd6w1v4wZBKzIgkPC2481wSiSBCaBWUbovtm9ryDH2ttiWnQEgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
                <span>
                LCD Monitor
                </span>
              </td>
              <td>
                <span>$550</span>
              </td>
              <td>
                <input type="number" defaultValue={2} />
              </td>
              <td>
                <span>$1100</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cart-buttons">
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
        <div className="checkout">
          <div className="coupon-input">
            <input type="text" placeholder="Coupon Code"/>
            <button>
              Apply Coupon
            </button>
          </div>
          <div className="cart-total">
            <h5>
            Cart Total
            </h5>
            <div>
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <hr />
            <div>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div>
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
