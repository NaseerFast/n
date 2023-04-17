



export default function Banner(){
   return(
<div className="banner">

    <div className="md:px-4">

      <div className="slider-container has-scrollbar">

        <div className="slider-item">

          <img src="./images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img" />

          <div className="banner-content">

            <p className="banner-subtitle">Trending item</p>

            <h2 className="banner-title">Women`&apos` latest fashion sale</h2>

            <p className="banner-text">
              starting at &dollar; <b>20</b>.00
            </p>

            <a href="#" className="banner-btn">Shop now</a>

          </div>

        </div>

        <div className="slider-item" style={{ backgroundImage: `url('/images/grad-10.jpg')` }}>

          <img src="/images/featured.png" alt="modern sunglasses" className="banner-img" />

         

        </div>

        <div className="slider-item">

          <img src="/images/banner-3.jpg" alt="new fashion summer sale" className="banner-img" />

          <div className="banner-content">

            <p className="banner-subtitle">Sale Offer</p>

            <h2 className="banner-title">New fashion summer sale</h2>

            <p className="banner-text">
              starting at &dollar; <b>29</b>.99
            </p>

            <a href="#" className="banner-btn">Shop now</a>

          </div>

        </div>

      </div>

    </div>


</div>


    )


}

