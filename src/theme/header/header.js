import React from 'react'
import './css.scss';

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src="assets/main-banner_2021-10-10/logo.png" alt="logo" />
            </div>
            <ul className="header-right">
                <li class="apply-for-free-use">
                    Apply for free use
                </li>
                <li class="solution">
                    solution
                </li>
                <li class="Rate-plan">
                    Rate plan
                </li>
                <li class="login">
                    login
                </li>
                <li class="apply-for-free-use">
                    Apply for free use
                </li>
            </ul>
        </div>
    )
}
