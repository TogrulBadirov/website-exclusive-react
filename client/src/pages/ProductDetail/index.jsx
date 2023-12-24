import { useState } from "react";
import "./index.scss";

const ProductDetail = () => {
    const [count, setCount] = useState(1)
    const [mainImg, setMainImg] = useState("https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1704067200&Signature=cAabQ1~p0j8Dk5JrDLj0K3fn~3lWmqu7sqVTCASSi58jet8DJdwMVXROY~Y6wyGfI5tRXsj381qpxROy6juvhYnzC0PabgZFi9MdWpKGLlWJKy-f4rkQzWNzL4QDwP9SspiIwvvyN2SgNBUWhksPjZkHtNwLygei4Vp4JFl1NTdtmJESL8IZIuiGYsdGEv8yidTTiYee00XlsScHV1nFrVuMZzaiqDNo3FRP33jIjn1lyqK5a~05I-VIKpYD6InbmvPuTMdlxVMGXWI~y1AzA1HJNn12erQlVknt8O~kCC0Aibla2YGvR7H-vk00uJiHBCImicsZFv0zFdQqho9DSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")
  return (
    <section id="details">
      <div className="container">
        <div className="product-images">
          <div className="images">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1704067200&Signature=C7S57kUw0kezddtJccSTQsg2FWhK5lLKfpK6LBGsYuEBK~PBoyvXoiL4WL3zmr3Ijtd11o7zNyPpXKy49fJZAr6lqS8FgR09y3-8jT0L8xwcB7RbL23j8NebDYGo9PHauEln3czcE8ISzRgi3Urbzu~AG67xnJfdsTWzozz5JE~gNrie2d6xGcC3SR3k2DnuG1wyAwqHfnbds9z~H9PpMrNJxyzqfiyl-p9RcpFosbRSOxKgz7AeIpJAAiddVVOUHe2fG5iTTnbTVh0-53FnS9Od1WSEYxpvWb5lhUKiJdneIVu1UaMuR1a1x6xd2PgE3Lln47Z1F79aH~KjCpxbKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                onClick={(e)=>setMainImg(e.target.src)}
              />
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1704067200&Signature=cz95Mntp1CZJToFlwERgB-XXV2RBY14lQGRJWx4Qhe1K-X-ZmD1IMqqTzMoKiPmzfHsMYAi7JEf3C5ece1OVTcMdF~mLl72saBkSR-VSYgutw6G~HGZPWS6qjLB7-dtVJBAFltsy~13kWITvH55oj5B6YZppROb4BnXyWD-xNx2dqSggby9khYNZezp9fx6FUl-EcVAczL3mrhK~0vDBVanyBtQK9PyqirxNE4zEaCp3FbURiygYEhhEKA~l0rN72nv9J4QV03Rml9vZCbYGy7XDPP5r8DR~6VwcyO1MDEgN-2Cm9rbb0UTgCk~99jBt0ytbR38tCxFi56CzHmFH7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                onClick={(e)=>setMainImg(e.target.src)}
              />
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1704067200&Signature=CFAs0fEFjkKd8YTRFkLjf6BNQI-7j7o-0EkA~wxnInuixWAq1rCJvpMfel4qc-lbKBSiL5C3RWke8pdmzl0U-giaF0ZBr8xRjCSVcyL3880t2Dh5iyjzr3K6apnh-ziAq-DBl1uD8vB29nyqIBD~tUjDuoXYL3dZcu6IdcPp6yvh~tCjgmKfhWxVuxcb3FF30NqQO415ip6C6JGEpa5HR239D8RHT6E~qtvpxlWyQM7bDP1b3P-vOqKUzyiJyYDLC-ouE9LfTgSb7QLAR7QiTw0JEVcu-cYh9BQh88ZbREN-sV1spXMnG6K42OpCZvS69KaBrlsEbZlk7Yihg~BO0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                onClick={(e)=>setMainImg(e.target.src)}
              />
            </div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1704067200&Signature=Te1wcW5iiujGNK4dWay413kq~aOoCWSSVOUHjp-bLXpwws-QNEykl5ncpRjmtjiNDVNjjgRgGcuJ-uTx~zUiueNNCJRkNv3Tfi874SJuLajORgJrruoHZaNNIhmrGhCxSDkxN03OiagBIW5QidyWvsdpYlPCA3hZ4zyB50FBrBFnXrkSqblzwVw0IhzxEAnrFbYM0~Pz8qXD9rXPjcb2tlFfklKE4uuSYNqlB8aFiM6QHxd0i2su-fhY~PJy3nsPsXbUTfcUiIRS2oQsjnBgT3hITgOm1SpZNxUl~TvA3ZmvyxNUqOkmmFqVOqjwOkVZtQeuqViYF52eskhCXYlOaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                onClick={(e)=>setMainImg(e.target.src)}
              />
            </div>
          </div>
          <div className="main-img">
            <img
              src={mainImg}
              alt=""
            />
          </div>
        </div>
        <div className="product-content">
          <h4>Havic HV G-92 Gamepad</h4>
          <div className="reviews">
            <div className="product-stars">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                  fill="#FFAD33"
                />
              </svg>
              <span>(150 Reviews)</span>
            </div>

            <p>$192.00</p>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr />
            <span>Colours:</span>
            <input type="radio" name="color" style={{ accentColor: "red" }} />
            <input type="radio" name="color" />

            <div className="size">
              <span>Size:</span>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>

            <div className="count">
              <button className="decrease-count" onClick={()=>setCount(count=>count >1?count-1:1)} >-</button>
              <input type="number" defaultValue={count} value={count} min={1} />
              <button className="increase-count" onClick={()=>setCount(count=>count+1)} >+</button>

              <button className="buy-now-btn">Buy Now</button>
              <button className="wishlist-btn">
              <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
