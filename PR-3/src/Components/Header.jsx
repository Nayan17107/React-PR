import './Header.css';
import './Comman.css';

function Header() {
    return (
        <header>
            <div class="topbar" id="top">
                <div class="container">
                    <div class="d-flex justify-between flex-wrap">
                        <ul class="d-flex justify-md-content">
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Follow us On :</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="ri-facebook-fill"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="ri-twitter-fill"></i></a>
                            </li>
                            <li><a href="javascript:void(0)"><i class="ri-google-fill"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="ri-dribbble-line"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="ri-wifi-fill"></i></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="ri-linkedin-fill"></i></a>
                            </li>
                        </ul>
                        <ul class="d-flex text-align">
                            <li>
                                <a href="javascript:void(0)"><i class="ri-mail-line"></i>
                                    <span> Email : demo@example.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><i class="ri-phone-fill"></i>
                                    <span> Phone : 0123456789</span>
                                </a>
                            </li>
                            <li>
                                <span> EN </span>
                                <a href="javascript:void(0)"><i class="ri-arrow-down-s-line"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="navbar relative">
                <div class="container">
                    <div class="d-flex justify-between align-items-center">
                        <a href="javascript:void(0)">
                            <img src="/logo.webp" alt="logo" title="Logo" />
                        </a>
                        <nav>
                            <ul class="d-flex">
                                <li>
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">About</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Project</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Events</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Blog</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Page</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Shortcodes</a>
                                </li>
                            </ul>
                        </nav>
                        <ul class="d-flex justify-center">
                            <li>
                                <a href="javascript:void(0)" class="theme-btn">DONATE</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="toggle"><i class="ri-menu-3-fill"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
};


export default Header;