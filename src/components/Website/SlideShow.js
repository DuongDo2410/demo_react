import React from 'react'

const SlideShow = () => {
    
    return (
        <div className="home ">
            <div className="slider ">
                <div className="slide active" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Fslider2.jpg?alt=media&token=aa4eb482-c6c5-46ed-89f8-8a55b9836054")'}}>
                <div className="container">
                    <div className="caption">
                    <h1>Winter Collection 2020</h1>
                    <p>Lorem ipsum dummy text goes here.</p>
                    <a href>Discover Now</a>
                    </div>
                </div>
                </div>
                <div className="slide" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/shop-11594.appspot.com/o/images%2Fslider3.jpg?alt=media&token=6506b51f-8098-4ebf-b591-ccbd1412a433")'}}>
                <div className="container">
                    <div className="caption">
                    <h1>2. Winter Collection 2020</h1>
                    <p>Lorem ipsum dummy text goes here.</p>
                    <a href>Shop Now</a>
                    </div>
                </div>
                </div>
                <div className="slide" style={{backgroundImage: 'url("images/slide-3.jpg")'}}>
                <div className="container">
                    <div className="caption">
                    <h1>3. Winter Collection 2020</h1>
                    <p>Lorem ipsum dummy text goes here.</p>
                    <a href>Shop Now</a>
                    </div>
                </div>
                </div>
            </div>
            {/* controls  */}
            {/* <div className="controls">
                <div className="prev"></div>
                <div className="next"></div>
            </div> */}
            {/* indicators */}
            {/* <div className="indicator">
            </div> */}

            </div>
            

    )
}

export default SlideShow
