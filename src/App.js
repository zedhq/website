import React, { Component } from 'react';
import logo from './images/zed.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <body className="">
      <div id="root">
        <div className="page-mask--loaded page-mask"></div>
        <main className="home-view__container">
          <nav className="grid-container-atom floating-nav-organism">
            <div className="grid-container-atom__width-enforcer">
              <ul className="floating-nav-organism__list">
                <li className="floating-nav-organism__list-item"><a
                  className="link-atom link-atom--charcoal link-atom--small link-atom--underline-charcoal" href="#about"
                  target="_self">About</a></li>
                <li className="floating-nav-organism__list-item"><a
                  className="link-atom link-atom--charcoal link-atom--small link-atom--underline-charcoal" href="#team"
                  target="_self">Team</a></li>
              </ul>
              <a className="link-atom link-atom--charcoal link-atom--small link-atom--underline-charcoal"
                 href="mailto:info@zed.io" target="_self">info@zed.io</a></div>
          </nav>
          <section id="about" className="grid-container-atom home-about-organism grid-container-atom--charcoal grid-container-atom--with-padding">
            <div className="grid-container-atom__width-enforcer">
              <div className="home-about-organism__headline-container"><h2
                className="headline-atom headline-atom--headline-2 home-about-organism__headline headline-atom--snow">The
                Zed software cooperative.</h2></div>
              <div className="home-about-organism__body-copy-container"><p
                className="copy-atom copy-atom--snow copy-atom--standard copy-atom--margin-bottom-small">
                The architectural model of our current internet is deeply flawed and we believe it is our
                responsibility to build the internet that we want. With strengths in growing open source
                communities and developing software teams, we want to help web3 projects succeed in this
                space while bringing sustainability and profitability to the Ethereum community.</p><p className="copy-atom copy-atom--snow copy-atom--standard">We believe in digital freedom
                in how it is an absolute human right and are willing to back the vision of Web3. Additionally, our values
                lie closely with the ethos of open source, giving and the mindset of investing back into the community.
              </p>
              </div>
            </div>
          </section>
          <section className="grid-container-atom home-email-callout-organism grid-container-atom--with-padding">
            <div className="grid-container-atom__width-enforcer">
              <div className="home-email-callout-organism__copy"><h2
                className="headline-atom headline-atom--headline-2 headline-atom--charcoal headline-atom--margin-bottom-medium">Get
                updates sent to your inbox</h2><p className="copy-atom copy-atom--charcoal copy-atom--standard">We'll
                keep you posted on important news regarding Zed!</p></div>
              <div className="home-email-callout-organism__email">
                <form className="email-form-molecule" noValidate="">
                  <div className="input-molecule input-molecule--required email-form-molecule__input"><label
                    className="input-molecule__label" htmlFor="email">Email<span
                    className="input-molecule__required-marker">*</span></label><input placeholder="john@email.com"
                                                                                       id="email"
                                                                                       className="input-molecule__input input-molecule__input--undefined"
                                                                                       name="email" maxLength="64"
                                                                                       value=""/></div>
                  <button className="button-atom button-atom--primary">Get updates</button>
                </form>
              </div>
            </div>
          </section>
          <footer className="grid-container-atom footer-molecule grid-container-atom--prism">
            <div className="grid-container-atom__width-enforcer">
              <div className="footer-molecule__top-section">
                <div className="footer-molecule__link-list-container">
                  <div className="footer-molecule__section footer-molecule__section--left">
                    <a className="link-atom link-atom--charcoal link-atom--small link-atom--underline-charcoal footer-molecule__link footer-molecule__link--first"
                    href="https://bitcoin.org/bitcoin.pdf" target="_self">Policy</a>
                  </div>
                </div>
                <img src={logo} alt="Zed Glyph" className="footer-molecule__glyph"/></div>
              <p
                className="copy-atom copy-atom--charcoal copy-atom--small copy-atom--margin-top-large footer-molecule__copy">Copyright
                ©2018 Zed. All Rights Reserved.</p></div>
          </footer>
        </main>
      </div>
      <script src="/dist/main.bundle.js"></script>


      </body>
    );
  }
}

export default App;
