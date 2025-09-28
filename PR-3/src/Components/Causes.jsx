import './Comman.css';
import './Causes.css';

function Causes() {
    return (
        <section>
            <div className="causes">
                <div class="container">
                    <div class="causes-title">
                        <h2>OUR<span>CAUSES</span></h2>
                        <img src="/title-causes.webp" alt="logo" title="Logo" />
                        <p>Our charity help those people who have no hope</p>
                    </div>
                    <div class="cause-inner">
                        <div class="row">
                            <div class="col-4 col-md-6 col-sm-12">
                                <div class="cause-item">
                                    <div class="cause-img">
                                        <img src="/couses-1.webp" alt="couses-1" title="couses-1" width="100%" />
                                    </div>
                                    <div class="cause-content">
                                        <h3>Children to get education</h3>
                                        <p class="text-align">Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.</p>
                                    </div>
                                    <ul class="d-flex justify-between align-items-center">
                                        <li><a href="javascript:void(0)" class="theme-btn">DONATE</a></li>
                                        <p>$ 25,000 / $ 50,000</p>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-4 col-md-6 col-sm-12">
                                <div class="cause-item">
                                    <div class="cause-img">
                                        <img src="/couses-2.webp" alt="couses-1" title="couses-1" width="100%" />
                                    </div>
                                    <div class="cause-content">
                                        <h3>Bring Electric and Light</h3>
                                        <p class="text-align">Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.</p>
                                    </div>
                                    <ul class="d-flex justify-between align-items-center">
                                        <li><a href="javascript:void(0)" class="theme-btn">DONATE</a></li>
                                        <p>$ 45,000 / $ 90,000</p>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-4 col-md-6 col-sm-12">
                                <div class="cause-item">
                                    <div class="cause-img">
                                        <img src="/couses-3.webp" alt="couses-1" title="couses-1" width="100%" />
                                    </div>
                                    <div class="cause-content">
                                        <h3>Water carrier  items</h3>
                                        <p class="text-align">Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus.</p>
                                    </div>
                                    <ul class="d-flex justify-between align-items-center">
                                        <li><a href="javascript:void(0)" class="theme-btn">DONATE</a></li>
                                        <p>$ 35,000 / $ 70,000</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Causes;