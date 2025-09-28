import './Comman.css';
import './Review.css';

function Review() {
    return (
        <section class="reviews">
            <div class="container">
                <div class="review-title text-align">
                    <h2>WHAT PEOPLE SAYS</h2>
                    <img src="/title-causes.webp" alt="logo" title="Logo" />
                </div>
                <div class="review-img">
                    <div class="review-inner text-align">
                        <img src="/review.webp" alt="logo" title="Logo" />
                    </div>
                    <div class="review-content text-align">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo officiis officia dolorem corrupti vitae autem alias nam inventore illum optio!</p>
                        <h3>Prajapati Nayan</h3>
                        <h5>Director</h5>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Review;