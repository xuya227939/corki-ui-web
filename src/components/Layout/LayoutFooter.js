/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './LayoutFooter.less';

export default function LayoutFooter() {
    return (
        <footer styleName="layout-footer">
            <p>
                <a styleName="layoutfooter-icon icon-github" href="//github.com/xuya227939/corki-ui" target="_blank" />
            </p>
            <p>
                Copyright © 2019 - {new Date().getFullYear()} Cherry Team
                <br />
            </p>
        </footer>
    );
}
