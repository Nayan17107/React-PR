import './Comman.css';
import './Help.css';

function Help() {
    return (
        <section class="helps">
            <div class="container">
                <div class="help-title">
                    <h2 class="text-align">HOW CAN YOU HELP US?</h2>
                    <p class="text-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet interdum erat, a pulvinar nibh sodales ac. Pellentesque quis augue non nunc sagittis rutrum.</p>
                </div>
                <div class="help-inner">
                    <div class="row">
                        <div class="col-4 col-md-6 col-xs-12">
                            <div class="help-item">
                                <nav>
                                    <ul class="d-flex justify-between">
                                        <li>
                                            <a href="javascript:void(0)"><i class="ri-bank-fill"></i></a>
                                        </li>
                                        <li>
                                            <h3>Donator</h3>
                                            <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                                            <a href="javascript:void(0)">LEARN MORE</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-4 col-md-6 col-xs-12">
                            <div class="help-item">
                                <nav>
                                    <ul class="d-flex justify-between">
                                        <li>
                                            <a href="javascript:void(0)"><i class="ri-money-dollar-box-line"></i></a>
                                        </li>
                                        <li>
                                            <h3>Funrising</h3>
                                            <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                                            <a href="javascript:void(0)">LEARN MORE</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-4 col-md-6 col-xs-12">
                            <div class="help-item">
                                <nav>
                                    <ul class="d-flex justify-between">
                                        <li>
                                            <a href="javascript:void(0)"><i class="ri-team-fill"></i></a>
                                        </li>
                                        <li>
                                            <h3>Volunteer</h3>
                                            <p>Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.</p>
                                            <a href="javascript:void(0)">LEARN MORE</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Help;