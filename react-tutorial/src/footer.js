import React from 'react'
import './base.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Footer() {

    return (
	<footer class="footer fixed-bottom">
    <div align="center" class="cr-footer-email">Contact us at <a class="email " title="e-mail"
                                                                     href="mailto:commonroad-i06@in.tum.de">commonroad-i06@in.tum.de</a>
        </div>
        <div align="center">Copyright © 2019 - All Rights Reserved - Technische Universität München</div>

	</footer>


    )
}

export default Footer;