import React, { useState } from 'react';
import Launchpage from './Launchpage';
import './Landingpage.css';
import Logo from "./images/logo.png";
import Github from "./images/githublogo.png";
import Medium from "./images/mediumlogo.png";
import Telegram from "./images/Telegramlogo.png";
import Twitter from "./images/twitterlogo.png";
import Icon1 from "./images/icon1.svg";
import Icon2 from "./images/icon2.svg";
import Icon4 from "./images/icon4.svg";
import Icon5 from "./images/icon5.svg";
import Icon6 from "./images/icon6.svg";
import Icon7 from "./images/icon-7.svg";
import infinites from "./images/infinitypaids.png";
  import infinite from "./images/infinitypaid.png";
  import { Link } from 'react-router-dom';

const Landingpage = () => {

 
  return <>
  <nav class="navbar navbar-expand-lg  ">
  <img src={Logo} class="img-fluid ml-5 logolandingpage" alt="..." width="10%" height="10%"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav ml-auto mr-5 navbar-right">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">InfinityPad</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Roadmap</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Whitepaper</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#">Partners</a>
      </li>
      <Link to='launchpad'>
      <li class="nav-item">
        <a class="nav-link text-white buttonapp" href="#">Enter App</a>
      </li>
      </Link>
      
    
    </ul>
  
  </div>
</nav>
   
   

 <section class="s-banner js-scroll ativo" id="Home">
    <div class="box-banner">
      <div class="left aos-init aos-animate" data-aos="fade-right">
        <div class="text-banner">
          <h1><span class="shine">Cross-chain</span> liquidity Integration platform Powered By InfinityPad</h1>
          <p class="text-banner">Faster, cheaper, interoperable and more than just trading</p>
        </div>
        <div class="info">
        <Link to='/form'>
          <a class="whitelist" href="#" target="_blank" rel="Apply For IDO">
            Apply For IDO
          </a>
          </Link>
          <div class="date">
            <a href="https://github.com/InfinityPad " target="_blank" class="medium_link" rel="Medium">
              <img src={Github} alt="icon-date"/>
            </a>
            <a href="https://InfinityPad .medium.com/" target="_blank" class="medium_link" rel="Medium">
              <img src={Medium} alt="icon-date"/>
            </a>
            <a href="https://t.me/InfinityPad group" target="_blank" class="medium_link" rel="Medium">
              <img src={Telegram} alt="icon-date"/>
            </a>
            <a href="https://twitter.com/InfinityPad Official" target="_blank" class="medium_link" rel="Medium">
              <img src={Twitter} alt="icon-date"/>
            </a>
          </div>
        </div>
      </div>

      <span class="text-criado">Powered By
        <strong>InfinityPad</strong>
      </span>

    </div>

    

  </section> 


  <section class="s-features js-scroll ativo" id="Features">
    <div class="top">
      <h2 data-aos="fade-right" class="aos-init aos-animate">Features</h2>
      <span data-aos="fade-right" class="p-modulo aos-init aos-animate">The Future of Decentralized Trading</span>

    </div>

    <div class="grid-perguntas aos-init aos-animate" data-aos="fade-up">
      <div class="item">
        <img src={Icon1} alt="icon"/>
        <p class="title-features">Powered by InfinityPad</p>
        <p class="text-features">We decided to join this quick growing ecosystem</p>
      </div>
      <div class="item">
        <img src={Icon4} alt="icon"/>
        <p class="title-features">Built on Astar Network</p>
        <p class="text-features">Astar supports EVM, ECDSA, and Solidity. We can deploy Ethereum compatible smart
          contracts easily.</p>
      </div>

      <div class="item">
        <img src={Icon6} alt="icon"/>
        <p class="title-features">Cross-chain liquidity pool</p>
        <p class="text-features">Users can trade tokens from different chains</p>
      </div>

      <div class="item">
        <img src={Icon5} alt="icon"/>
        <p class="title-features">Layer 2 scaling solution</p>
        <p class="text-features">Astar Network brings fast and low transaction costs</p>
      </div>

      <div class="item">
        <img src={Icon7} alt="icon"/>
        <p class="title-features">Token launchpad</p>
        <p class="text-features">Create cross-chain token pools and raise capital for projects</p>
      </div>

      <div class="item">
        <img src={Icon2} alt="icon"/>
        <p class="title-features">Governance</p>
        <p class="text-features">On-Chain governance will be created to make InfinityPad  a DAO</p>
      </div>
    </div>
  </section>

   {/* <section className="s-depoimentos s-mentor" id="InfinityPad " style={{position: 'fixed', margin: 'auto', inset: '0px auto auto 0px', boxSizing: 'border-box', width: 1903}}>
  <div className="box-mentor">
    <div className="left aos-init aos-animate" data-aos="fade-right">
      <h2>What is InfinityPad ?</h2>
      <span className="span-boost">InfinityPad  is a cross-chain trading platform on InfinityPad</span>
      <p className="p-mentor">There are several launchpads in market so why bring another one – that’s where we started. WHY? We have seen great innovations in IDO launchpad space since late 2020 but there is still a lot of room for further innovation and improvement to bring an effective and efficient IDO launchpad in crypto space. Major flaw is that most launchpads are based on single blockchain, have inefficient allocation process, and give zero advantage to its long-term holders over newcomers irrespective of their token holdings.</p>
      <p className="p-mentor">InfinityPad is addressing these flaws by introducing multi-chain launchpad which gives guaranteed-time-weighted allocation to its token holders, and has an in-built deflationary mechanism. InfinityPad is launching on Binance Smart Chain and will grow its ecosystem to ETH, Solana, Polkadot and Cardano in a phased approach. Projects will be able to raise funds through our platform in BNB, ETH, DOT, ADA, and SOL simultaneously. More blockchains will be supported as the ecosystem grows.</p>
    </div>
    <div className="right aos-init aos-animate" data-aos="fade-up">
      <div className="avatar">
        <div className="text">
          <span className="span-mentor" />
          <h3>InfinityPad .io</h3>
        </div>
        <picture>
          <source srcSet="img/avatar_InfinityPad.png" type="image/webp" />
          <img src={infinites} className="avatar-gil lozad" alt="InfinityPad " />
        </picture>
      </div>
      <img src={infinite} className="lozad selo dzsparallaxer auto-init mode-oneelement under-760 under-500 dzsprx-readyall" data-options="{ settings_mode: &quot;oneelement&quot;,direction:&quot;reverse&quot;,settings_mode_oneelement_max_offset: &quot;60&quot;}" alt="selo-design" style={{transform: 'translate3d(0px, -24.1853px, 0px)'}} />
    </div>
  </div>
</section>  */}


<Launchpage />

  </>;
};

export default Landingpage;
