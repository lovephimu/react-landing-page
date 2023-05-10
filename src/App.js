import './App.css';
import React from 'react';
import styles from './App.module.scss';
import { ReactComponent as LogoTwo } from './logodysnix.svg';
import { ReactComponent as LogoOne } from './logorpc.svg';
import { ReactComponent as PicOne } from './pic1.svg';
import { ReactComponent as ArrowUp } from './pics/ArrowUp.svg';
import award from './pics/Award.png';
import { ReactComponent as BnbChainBw } from './pics/bw_BNBchain.svg';
import { ReactComponent as EthereumBw } from './pics/bw_Ethereum.svg';
import { ReactComponent as PolygonBw } from './pics/bw_Polygon.svg';
import { ReactComponent as ColorPolygon } from './pics/coloPolygon.svg';
import { ReactComponent as ColorBnb } from './pics/color_BNB.svg';
import { ReactComponent as ColorEthereum } from './pics/color_Ethereum.svg';
import { ReactComponent as ColorVelas } from './pics/color_Velas.svg';
import { ReactComponent as Eye } from './pics/Eye.svg';
import { ReactComponent as FirmNansen } from './pics/firm_nansen.svg';
import { ReactComponent as FirmPeanut } from './pics/firm_Peanut.svg';
import { ReactComponent as FirmRarify } from './pics/firm_Rarify.svg';
import { ReactComponent as FirmShelf } from './pics/firm_shelf.svg';
import { ReactComponent as FirmVelas } from './pics/firm_Velas.svg';
import { ReactComponent as FirmSnyc } from './pics/firm_zkSync.svg';
import { ReactComponent as GreyAvalance } from './pics/grey_Avalance.svg';
import { ReactComponent as GreyPolka } from './pics/grey_Polkadot.svg';
import { ReactComponent as GreySolana } from './pics/grey_Solana.svg';
import { ReactComponent as Lock } from './pics/Lock.svg';
import { ReactComponent as LogoSide } from './pics/logo2_WHITE.svg';
import { ReactComponent as LogoMain } from './pics/logo_WHITE.svg';
import { ReactComponent as PunchAutomatic } from './pics/punchAutomatic.svg';
import { ReactComponent as PunchBlock } from './pics/punchBlockhain.svg';
import { ReactComponent as PunchControl } from './pics/punchSimpleControl.svg';
import { ReactComponent as Rabbit } from './pics/Rabbit.svg';
import { ReactComponent as GitHub } from './pics/socialGithub.svg';
import { ReactComponent as LinkedIn } from './pics/socialLinked.svg';
import { ReactComponent as Medium } from './pics/socialMedium.svg';
import { ReactComponent as Reddit } from './pics/socialReddit.svg';
import { ReactComponent as Twitter } from './pics/socialTwitter.svg';
import { ReactComponent as UserA } from './pics/user1.png';
import { ReactComponent as UserB } from './pics/user2.png';
import { ReactComponent as UserC } from './pics/user3.png';
import { ReactComponent as UserD } from './pics/user4.png';
import { ReactComponent as UserClutch } from './pics/userClutch.svg';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.flexHeaderMenu}>
          <LogoOne className={styles.flexImage} />
          <LogoTwo className={styles.flexImage} />
          <a href="/#" className={styles.flexHeaderItems}>
            Web3 API
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Enterprise
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Pricing
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Docs
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Blog
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            About Us
          </a>
          <a href="/#" className={`${styles.flexHeaderItems} ${styles.logIn}`}>
            Log in
          </a>
          <a
            href="/#"
            className={`${styles.flexHeaderItems} ${styles.linkButton}`}
          >
            Try it for free
          </a>
        </div>
      </header>
      <section className={styles.flexContainer}>
        <div className={styles.mottoCard}>
          <div className={styles.mottoItem}>
            Dive into Web3 with our fastest geo-distributed high-available
            Blockchain API
          </div>
          <div>
            <EthereumBw />
            Ethereum
          </div>
          <div>
            <BnbChainBw />
            BNB Chain
          </div>
          <div>
            <PolygonBw />
            Polygon
          </div>
          <PicOne />
        </div>
      </section>
      <section className={styles.flexContainer}>
        <div>Container 1</div>
        <div>Container 2</div>
        <div>Container 3</div>
      </section>
      <section
        className={`${styles.flexContainer} ${styles.flexDirectionColumn} ${styles.white}`}
      >
        <h1>Benefits of RPC Fast API</h1>
        <div className={styles.mottoCard}>
          <Rabbit />
          <h2 className={styles.mottoItem}>
            Fastest and high available blockchain infrastructure
          </h2>
        </div>
        <div className={styles.mottoCard}>
          <Lock />
          <h2 className={styles.mottoItem}>Enterprise-grade security</h2>
        </div>
        <div className={styles.mottoCard}>
          <Eye />
          <h2 className={styles.mottoItem}>
            Autoscalable and reliable infrastructure
          </h2>
        </div>
      </section>
      <section
        className={`${styles.flexContainer} ${styles.flexDirectionColumn} ${styles.blue}`}
      >
        <h1>We're trusted by</h1>
        <div>
          <FirmPeanut />
          <FirmShelf />
          <FirmRarify />
          <FirmVelas />
          <FirmSnyc />
          <FirmNansen />
        </div>
        <div>BLACKBOX</div>
        <h1>Profit even more from RPC Fast</h1>
        <div className={styles.flexContainer}>
          <div>
            <PunchControl />
          </div>
          <div>
            <PunchBlock />
          </div>
          <div>
            <PunchAutomatic />
          </div>
        </div>
        <div>MOTTOS-PUNCHLINES</div>
      </section>
      <section
        className={`${styles.flexContainer}  ${styles.flexDirectionColumn}  ${styles.darkBlue}`}
      >
        <h1>Select the blockchain you need</h1>
        <p>
          Get access to high-quality blockchain tools with automatic maintenance
          to build your product and never miss any valuable transactions with
          our high-quality node pool.
        </p>
        <div className={styles.flexContainer}>
          BRANDFLEXBOX
          <div>
            <ColorEthereum />
          </div>
          <div>
            <ColorBnb />
          </div>
          <div>
            <ColorPolygon />
          </div>
          <div>
            <ColorVelas />
          </div>
        </div>
        <div className={styles.flexContainer}>
          BRANDFLEXBOX COMING SOON
          <div>
            <GreyPolka />
          </div>
          <div>
            <GreyAvalance />
          </div>
          <div>
            <GreySolana />
          </div>
        </div>
      </section>
      <section
        className={`${styles.flexContainer}  ${styles.flexDirectionColumn}`}
      >
        <h1>
          A bespoke solution created by Dysnix
          <ArrowUp />
        </h1>
        <img src={award} alt="" />
        <div>
          CONTAINER OF THREE BOXES
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>QUOTESSLIDESHOW</div>
      </section>
      <section className={`${styles.flexContainer} ${styles.white}`}>
        <h1>Frequently Asked Questions: Basic Knowledge to Remind</h1>
        <div>
          ANSWERFLEXBOX
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </section>
      <footer
        className={`${styles.flexContainer}  ${styles.flexDirectionColumn} ${styles.dark}`}
      >
        <div>
          <div>
            <LogoMain className={styles.flexImage} />
            <LogoSide className={styles.flexImage} />
          </div>
          <div>Available blockchains</div>
          <div>Resources</div>
          <div>Company</div>
        </div>
        <div>
          <div>Contacts</div>
          <div>
            <Twitter />
            <GitHub />
            <Medium />
            <Reddit />
            <LinkedIn />
          </div>
        </div>
      </footer>
    </>
  );
}
