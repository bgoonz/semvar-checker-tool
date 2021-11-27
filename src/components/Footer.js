import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = props => (
    <footer className="bg-light px-3 pt-3">
        <div className="row">
            <div className="col">
                <h3>BROUGHT TO YOU BY...</h3>
            </div>
        </div>

        <div className="row">
            <div className="offset-xl-5 offset-sm-4 col-xl-1 col-sm-2 text-center">
                <a href="https://twitter.com/bgooonz" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://avatars.githubusercontent.com/u/66654881?v=4&amp;s=400"
                        alt="bgoonz"
                        className="img-fluid rounded-circle mb-1"
                    />
                    <span>@bgooonz</span>
                </a>
            </div>

      
        </div>

        <div className={`row ${props.className}`}>
            <div className="col">
                <p>
                    {/* and some{' '}
                    <a href="https://github.com/bgoonz/semver-check/graphs/contributors">awesome contributors</a>. */}
                </p>
            </div>
        </div>
    </footer>
);

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
};

export default Footer;
