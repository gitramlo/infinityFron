import React from 'react';
 import AboutInfinity from './images/aboutpad.jpg'
 import Buildinfinity from './images/buildinfinitypad.png'
 import Aboutdinfinitypad from './images/aboutlaunchpad.png'
 import Telegram from "./images/Telegramlogo.png";
 import Twitter from "./images/twitterlogo.png";
 import MME from "./images/mme.png"
 import Eagle from "./images/eagle.png"
 import TCS from "./images/tcs.png"
 import MMIC from "./images/mmic.png"
 import CRYPTOON from "./images/cryptoon.png"
  import Milkayway from "./images/milkyway.png"
  import Dao from "./images/daostarter.png"
  import Gami from "./images/gami.png"
  import Interfi from "./images/interfi.png"
  import Kommuni from "./images/kommunitas.png"
  import Crypt from "./images/crypt.png"
  import Tugou from "./images/tugou.png"
  // import Cel from "./images/celolaunch.png"
  import Astronaut from "./images/astronaut.png"
 import Launchzone from "./images/launchzone.png"
 import MH from "./images/mhventures.png"
 import Zig from "./images/zig.png"
  import Crypttox from "./images/cryptoxplorer.png"
  import Phoenix from "./images/phoenix.png"
  import Moonster from "./images/moonstarter.png"
 import Alien from "./images/alien.png"
  import Inter from "./images/inter.png"
 import Infinityselo from "./images/infinityselo.png"
 import Github from "./images/githublogo.png";
 import Medium from "./images/mediumlogo.png";
 import Logo from "./images/logo.png";
import Bubbles from "./images/bubbles.svg";
 import Uniswap from "./images/uniswap.png";
 import Mexec from "./images/mexec.png";
 import Arrow from "./images/arrow-right.svg";
//  import Telegram from "./images/Telegramlogo.png";
//  import Twitter from "./images/twitterlogo.png";

import { Link } from 'react-router-dom';
 

const Launchpage = () => {
  return <>
  {/* <h1>hii...</h1> */}
       <div data-scrollmagic-pin-spacer="" class="scrollmagic-pin-spacer">
    <section class="s-mentor aos-init aos-animate" data-aos="fade-up">
      <div class="box-about">
        <h2>InfinityPad  Cross-chain Liquidity Pool</h2>
        <img src={AboutInfinity}/>
      </div>
    </section>

    <section class="s-mentor aos-init aos-animate" data-aos="fade-up">
      <div class="box-about">
        <h2>Built on Astar Network</h2>
        <img src={Buildinfinity} />
      </div>
    </section>

    
    <section class="s-mentor aos-init aos-animate" data-aos="fade-up">
      <div class="box-about">
        <h2>InfinityPad  Launchpad</h2>
        <img src={Aboutdinfinitypad}/>
      </div>
    </section>

   <section className="s-mentor aos-init aos-animate" data-aos="fade-up" id="tier-system">
  <div className="box-about">
    <h2 style={{marginBottom: 120}}>Tier System</h2>
  </div>
  <div className="tier-system-content">
    <div className="tier-system-item">
      <p className="title">TIER 1</p>
      <p>Requirement</p>
      <p className="bold">
        Complete Social Tasks
      </p>
      <p>Allocation Guaranteed</p>
      <p className="bold">YES</p>
      <p>Lock Period (days)</p>
      <p className="bold">0</p>
      <p>Pool Weight</p>
      <p className="bold last">5</p>
    </div>
    <div className="tier-system-item">
      <p className="title">TIER 2</p>
      <p>Requirement</p>
      <p className="bold">Stake INFP 1,000</p>
      <p>Allocation Guaranteed</p>
      <p className="bold">YES</p>
      <p>Lock Period (days)</p>
      <p className="bold">20</p>
      <p>Pool Weight</p>
      <p className="bold last">20</p>
    </div>
    <div className="tier-system-item">
      <p className="title">TIER 3</p>
      <p>Requirement</p>
      <p className="bold">Stake INFP 2,500</p>
      <p>Allocation Guaranteed</p>
      <p className="bold">YES</p>
      <p>Lock Period (days)</p>
      <p className="bold">20</p>
      <p>Pool Weight</p>
      <p className="bold last">60</p>
    </div>
    <div className="tier-system-item">
      <p className="title">TIER 4</p>
      <p>Requirement</p>
      <p className="bold">Stake INFP 8,000</p>
      <p>Allocation Guaranteed</p>
      <p className="bold">YES</p>
      <p>Lock Period (days)</p>
      <p className="bold">20</p>
      <p>Pool Weight</p>
      <p className="bold last">200</p>
    </div>
    <div className="tier-system-item">
      <p className="title">TIER 5</p>
      <p>Requirement</p>
      <p className="bold">Stake INFP 15,000</p>
      <p>Allocation Guaranteed</p>
      <p className="bold">YES</p>
      <p>Lock Period (days)</p>
      <p className="bold">20</p>
      <p>Pool Weight</p>
      <p className="bold last">400</p>
    </div>
  </div>
</section>

<section className="s-projetos js-scroll aos-init aos-animate ativo" id="FAQ" data-aos="fade-up">
  <div className="box-projetos">
    <div className="top">
      <h2 data-aos="fade-right" className="aos-init aos-animate">FAQ</h2>
      <span data-aos="fade-right" className="p-modulo aos-init aos-animate">Please refer to relevant issues</span>
    </div>
    <div className="content">
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">01</span>
            <h2 className="title-projetos">What can users do on InfinityPad ?</h2>
          </div>
          <p className="p-projetos">Users can trade tokens cross-chain, participate in IDOs and more additional features
            in future.</p>
          <div className="icon" />
        </div>
      </a>
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">02</span>
            <h2 className="title-projetos">What is InfinityPad ’s token utility ($INFP)?</h2>
          </div>
          <p className="p-projetos">INFP can be used to farm, to earn revenue share and to participate in governance.</p>
          <div className="icon" />
        </div>
      </a>
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">03</span>
            <h2 className="title-projetos">How can I contact the InfinityPad  team?</h2>
          </div>
          <p className="p-projetos">Email: business@InfinityPad .io. You can also find us on Twitter and Telegram.</p>
          <div className="icon" />
        </div>
      </a>
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">04</span>
            <h2 className="title-projetos">Are there risks in using InfinityPad ?</h2>
          </div>
          <p className="p-projetos">The InfinityPad  smart contracts will be audited to ensure they are safe.</p>
          <div className="icon" />
        </div>
      </a>
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">05</span>
            <h2 className="title-projetos">Where can I buy $INFP?</h2>
          </div>
          <p className="p-projetos">$INFP will be initially available for purchase via an IDO soon - follow our medium,
            Twitter and telegram posts to find out when the whitelist is announced and how t apply. Shortly after the
            IDO, $INFP will be available on Uniswap, followed by other exchanges.</p>
          <div className="icon" />
        </div>
      </a>
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">06</span>
            <h2 className="title-projetos">How are asset prices determined on InfinityPad ?</h2>
          </div>
          <p className="p-projetos">InfinityPad  doesn’t use an order book to derive the price of an asset. InfinityPad  will work
            in the same way as Uniswap’s AMM. The larger the order relative to the pool, the worst the rate you will
            receive as the ratio moves along the curve.</p>
          <div className="icon" />
        </div>
      </a>
      <a rel="noopener">
        <div className="item">
          <div className="title">
            <span className="number-projeto">07</span>
            <h2 className="title-projetos">What is the future of InfinityPad ?</h2>
          </div>
          <p className="p-projetos">The future of InfinityPad  is not only a fast, low fee cross-chain liquidity pool trading
            platform but also an integrated platform to serve the multiple needs of traders and DeFi as a whole.</p>
          <div className="icon" />
        </div>
      </a>
    </div>
    <div className="date">
      <a className="telegram_link" href="https://t.me/InfinityPad io" target="_blank" rel="noreferrer"><img src={Telegram} /><span className="text-date">
          <strong>Follow on Telegram</strong>
        </span></a>
      <a className="twitter_link" href="https://twitter.com/InfinityPad Official" target="_blank" rel="noreferrer"><img src={Twitter} /><span className="text-date">
          <strong>Follow on Twitter</strong>
        </span></a>
    </div>
  </div>
</section>

<section className="s-parceiros js-scroll aos-init aos-animate ativo" id="Partners" data-aos="fade-up">
  <div className="box-parceiros">
    <h2 data-aos="fade-right" className="aos-init aos-animate">Partners</h2>
    <div className="empresas">
      <ul>
        <li>
          <img src={MME} alt="the_crypto_lifestyle" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Eagle} alt="trendsetter_ventures" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={TCS} alt="skybridge_ventures" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={MMIC} alt="crypto_legendary" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={CRYPTOON} alt="RAY_PAKA" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Milkayway} alt="netvrk" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Dao} alt="gms" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Gami} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Interfi} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Kommuni} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Crypt} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Tugou} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        {/* <li>
          <img src="" alt="any-swap" className="lozad" data-loaded="true" />
        </li> */}
        <li>
          <img src={Astronaut} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Launchzone} className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={MH} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Zig} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Crypttox } alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Phoenix} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Moonster} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
        <li>
          <img src={Alien} alt="any-swap" className="lozad" data-loaded="true" />
        </li>
      </ul>
    </div>
    <h2>Audit</h2>
    <div className="empresas">
      <ul>
        <li>
          <img src={Inter} alt="the_crypto_lifestyle" className="lozad" data-loaded="true" />
        </li>
      </ul>
    </div>
    <div className="selo aos-init aos-animate" data-aos="fade-left">
      <img src={Infinityselo} alt="selo-uiBoost" className="lozad" />
    </div>
  </div>
</section>
 
<footer className="js-scroll aos-init ativo aos-animate" data-aos="fade-up">
  <img src={Bubbles} className="bubbles" alt="bubbles" />
  <div className="top aos-init aos-animate" data-aos="fade-down">
    <a >
      <img src={Logo} alt="logo InfinityPad " />
    </a>
  </div>
  <div className="box-informacoes">
    <div className="left">
      <p className="title-footer">Cross-chain liquidity Integration platform - Powered by InfinityPad</p>
      <div className="info">
        <span className="ui-text">Contact us:</span>
        <div className="text">
          Email:business@InfinityPad .io | martin@InfinityPad .io
        </div>
      </div>
      <a className="abrir-modal" href="#" rel="noreferrer">InfinityPad </a>
    </div>
    <div className="textwidget custom-html-widget">
      <ul className="footer-share share-list list-unstyled">
        <li><a href="" target="_blank"><img src={Twitter}/></a>
        </li>
        <li><a href="" target="_blank"><img src={Telegram} /></a></li>
        <li><a href="" target="_blank"><img src={Medium} /></a></li>
        <li><a href="" target="_blank"><img src={Github} /></a></li>
      </ul>
    </div>
  </div>
  <div className="box-informacoes " style={{marginBottom:'6rem!important'}}>
    <div className="info_menu">
      <span className="ui-text_h1">Company</span>
      <div className="ui-text_menu">
        <ul>
          <li><a href="#" target="_blank">Apply for IDO on InfinityPad </a></li>
          <li><a href="#" target="_blank">Apply for listing on InfinityPad  Pools</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="info_menu">
      <span className="ui-text_h1">Help</span>
      <div className="ui-text_menu" style={{color:'white'}}>
        Comming soon
      </div>
    </div>
    <div className="info_menu">
      <span className="ui-text_h1">Projects &amp; Developers</span>
      <div className="ui-text_menu" style={{color:'white'}}>
        Comming soon
      </div>
    </div>
  </div>
   {/* <div className="bottom">
    <div className="info">
      <span className="ui-text">Copyright © 2022 InfinityPad . All rights reserved.</span>
    </div>
    <div className="topo">
      <a href="#home" className="top-text">
        <img src="img/arrow-up.svg" alt="arrow-up" />
        TOP
      </a>
    </div>
  </div>  */}
</footer>


<section className="s-email fixed-bar">
  <div className="email">
  <Link to='launchpad'>
    <a className="btn" target="_blank" href="#">Enter App</a>
    </Link>
    <a target="_blank" href="#">
      <img src={Infinityselo} alt className="exs" />
    </a>
    <a target="_blank" href="#">
      <img src={Uniswap} alt className="exs" />
    </a>
    <a target="_blank" href="#">
      <img src={Mexec} alt className="exs" />
    </a>
  </div>
  <a href="#" target="_blank" className="top-text">
    <div className="email">
      <p className="text-email" tabIndex={17}>
        Dear InfinityPad  Supporters, The Token Contract address is: 0xe6f143a0e0a8f24f6294ce3432ea10fad0206920
      </p>
       {/* <img className="arrowrightimg" src={Arrow} alt="arrow-right" />  */}
    </div>
  </a>
</section>




  </div> 
  </>;
};

export default Launchpage;
