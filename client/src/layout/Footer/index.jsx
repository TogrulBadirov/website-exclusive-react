import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="exclusive">
          <h4>Exclusive</h4>
          <p className="">Subscribe</p>
          <p>Get 10% off your first order</p>
          {/* <div className="email-input"> */}
          <form action="" className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
          {/* </div> */}
        </div>

        <div className="support">
          <h5>Support</h5>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="account">
          <h5>Account</h5>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="quick-link">
          <h5>Quick Link</h5>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="download-app">
          <h5>Download App</h5>
          <p>Save $3 with App New User Only</p>
          <div className="application">
            <div className="div1">
              <img
                src="https://s3-alpha-sig.figma.com/img/9913/87c0/5dd6d44594e01b675513068803e2426d?Expires=1704067200&Signature=hf2OfffRJ0Lf3zXK4JfrObhSieZEK5CHxgTSBqMSoZHiRMijoaJQTQ2G51jhx70Jk7RSGSix6UutDS1hsFpFrGds6LhFcnEbxbVRT3xJ7ttal-aaT~dVw1n-3FjKuYsraFL~~z7SXSZRfdRb2NXaBD6xbIaxiw-LOvykTx0Wxwlv7UXl~SBSG20VTa-OR-H1xJtz0ZE9FBlRch4MMMcemYGu18VLsWlaXMb1~UYlG5wWOFqv4Fo29FbVjAWwLKldFeCb76QdcLLz9Nj6gjETFNP5Gv5Bk46uDYo3i3m8MjMkKyOz8KSUiehxdujxU5RrQy3Mtymi9f1gy0WJYSBONg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="div2">
              <img
                src="https://s3-alpha-sig.figma.com/img/a61d/4c71/10b18ab55a1e1a07ebf54a46ebb07284?Expires=1704067200&Signature=l0~5JSQdj-rVNNWv81m8fVDpNvkRSZVsDZBzX8GUHn2UL61AKH0QzpUOHUuFY2kZA8krrx0l1HfJlrhfTXvi2KMCcN59Cqmmo23FM~nrJia6PEBrcb9Kv4Cz5wbkxTLVAvuSfQG3PFCr~LBeB5xAvjPzVems6rhMJMvh1~Li7HshKm0oYYMOrSkrF2lFTXfGjnuOYPJHwxQlY6Io9aMHqrGUaNmoEmKJU-X7gjqHjv78ElsS1WkRP64X4JA2C0r02~csm4ZVF23w0I3gM~4RRFpxTizNaIOjkR7nLlHoBknfuT-N6s37GCoZJ6A1iGnmiukO~WvUMYMoGVTR0Vr8Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div className="div3">
              <img
                src="https://s3-alpha-sig.figma.com/img/3893/2d5a/ccb54c528f9bcf326ca48ea29bd6d890?Expires=1704067200&Signature=TliNm0-~pHhKzFUzg1ZMJu17QsFeE7jer-Uxx0Xl6PJZ4DxRJ4yguPdZa6beoj9gQkmzkAqH9140C3YjGxUq91EM~zOrOAdbXNBbiKlky7-w8Rj-90BQH87kaFi6EFKerlEfdLOLWMz834QsPfiaQ5eyxYIkhHGdgXeZr19Vmw8oRktBjbkE1R1lbyMnrnKlUws6y38pWSD2jjD8nuLU-QubrNc-Q1akCB4DhJhjLUImGf19F4SMAeJbjNu4hwm3yINS-FNVJB4TBnpns0iuO2yH8wUBxEa37218SHMpxVpiL3BVfDpfMdTUb6hHkl1Qpzj7JrXFcKd0WSXD6Rsj6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
