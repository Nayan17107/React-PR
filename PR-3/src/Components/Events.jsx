import './Events.css';
import './Comman.css';

function Events() {
    return (
        <section class="events">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-4 col-md-6 col-xs-12">
                        <div class="event-inner">
                            <nav>
                                <ul class="d-flex align-items-center">
                                    <li>
                                        <i class="ri-calendar-check-fill"></i>
                                    </li>
                                    <li>
                                        <h3>Up comming event</h3>
                                        <p>SCHOOL OF CRITIVITY</p>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-8 col-md-6 col-xs-12">
                        The countdown is finished!
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Events;