import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.themeMode} bg-${props.themeMode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div class={`form-check form-switch text-${props.themeMode === "light" ? "dark" : "light"}`}>
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => { props.toggleThemeMode(null) }} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">{props.toggleBtnText}</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, }

Navbar.defaultProps = { title: "TextUtils" } // This will be the default title if title is not passed as an argument
