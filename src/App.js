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
import { ReactComponent as FirmShelf } from './pics/firm_shelf.svg';
import { ReactComponent as FirmVelas } from './pics/firm_Velas.svg';
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

// import { ReactComponent as FirmSnyc } from './pics/firm_zkSync.svg';
// import { ReactComponent as FirmRarify } from './pics/firm_Rarify.svg';
// import { ReactComponent as UserA } from './pics/user1.png';
// import { ReactComponent as UserB } from './pics/user2.png';
// import { ReactComponent as UserC } from './pics/user3.png';
// import { ReactComponent as UserD } from './pics/user4.png';
// import { ReactComponent as UserClutch } from './pics/userClutch.svg';

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
          <div>
            <div className={styles.mottoItem}>
              <h1>
                Dive into Web3 with our fastest geo-distributed high-available
                Blockchain API
              </h1>
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
          </div>
          <PicOne />
        </div>
      </section>
      <section className={styles.flexContainer}>
        <div
          className={`${styles.fancyBox}  ${styles.framePurple} ${styles.boxBackgroundPurple}`}
        >
          Access our JSON-RPC endpoint to make your UX smoother and faster, and
          decrease the latency. Our blockchain API allows you to concentrate on
          growth and development tasks
        </div>
        <div className={`${styles.fancyBox} ${styles.boxBackgroundPurple}`}>
          <div>100%</div>
          <div>node-as-a-service with a quick launch</div>
        </div>
        <div
          className={`${styles.fancyBox}  ${styles.frameOrangeLight} ${styles.boxBackgroundPurple}`}
        >
          <div>0%</div>
          <div>of in-house blockchain deployment, support, and maintenance</div>
        </div>
      </section>
      <section
        className={`${styles.flexContainer} ${styles.flexDirectionColumn} ${styles.white}`}
      >
        <h1>Benefits of RPC Fast API</h1>
        <div
          className={`${styles.mottoCard} ${styles.fancyBox} ${styles.frameBlue} ${styles.boxBackgroundBlue}`}
        >
          <Rabbit />
          <div>
            <h2 className={styles.mottoItem}>
              Fastest and high available blockchain infrastructure
            </h2>
            <p>
              Our nodes as a service provide you with the fastest and most
              stable connection. We are ultra-speedy thanks to:
            </p>
            <ul>
              <li>Geo-distributed global infrastructure</li>
              <li>100% healthy nodes on production</li>
              <li>Reducing latency without any harm to UX</li>
            </ul>
          </div>
        </div>
        <div
          className={`${styles.mottoCard} ${styles.fancyBox} ${styles.framePurple} ${styles.boxBackgroundPurple}`}
        >
          <Lock />
          <div>
            <h2 className={styles.mottoItem}>Enterprise-grade security</h2>
            <p>
              We can protect the nodes from attacks on DNS and domain registrar
              servers:
            </p>
            <ul>
              <li>Use JSON Web Token (JWT). Available for Enterprise plan.</li>
              <li>Use ETH domain name</li>
            </ul>
          </div>
        </div>
        <div
          className={`${styles.mottoCard} ${styles.fancyBox} ${styles.frameOrangeLight} ${styles.boxBackgroundOrange}`}
        >
          <Eye />
          <div>
            <h2 className={styles.mottoItem}>
              Autoscalable and reliable infrastructure
            </h2>
            <p>
              Meet PredictKube, an AI model trained to predict the traffic trend
              and autoscale infrastructure capacities accordingly:
            </p>
            <ul>
              <li>
                It works based on your historical data and business metrics.
              </li>
              <li>
                PredictKube autoscales the node pool to keep your project always
                up and capable of dealing with any traffic.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className={`${styles.flexContainer} ${styles.flexDirectionColumn} ${styles.blue}`}
      >
        <h1>We're trusted by</h1>
        <div>
          <FirmPeanut />
          <FirmShelf />
          <FirmVelas />
        </div>
        <div className={`${styles.fancyBox} ${styles.boxBackgroundDark}`}>
          <div>
            Try RPC Fast node-as-a-service for free and connect to the
            blockchain immediately
          </div>
          <div>Start now for free</div>
        </div>
        <h1>Profit even more from RPC Fast</h1>
        <div className={styles.flexContainer}>
          <div>
            <PunchControl />
            <h2>Simple Control Panel</h2>
            <p>
              To monitor your blockchain hosting, we created an intuitive
              dashboard that builds reports about the state of infrastructure.
            </p>
          </div>
          <div>
            <PunchBlock />
            <h2>Blockchain data consistency</h2>
            <p>
              We keep the consistency of infrastructure automatic and
              error-proofed. Perfect for smart contract services.
            </p>
          </div>
          <div>
            <PunchAutomatic />
            <h2>Automatic software updates</h2>
            <p>
              We track all hard forks and update the software versions timely.
              You don’t have to think over and plan another tour of regular
              updates.
            </p>
          </div>
        </div>
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
          <div className={`${styles.fancyBox} ${styles.boxBackgroundWhite}`}>
            <ColorEthereum />
            <h2>Ethereum API</h2>
            <a href="/#">See details</a>
          </div>
          <div className={`${styles.fancyBox} ${styles.boxBackgroundWhite}`}>
            <ColorBnb />
            <h2>BNB Chain API</h2>
            <a href="/#">See details</a>
          </div>
          <div className={`${styles.fancyBox} ${styles.boxBackgroundWhite}`}>
            <ColorPolygon />
            <h2>Polygon API</h2>
            <a href="/#">See details</a>
          </div>
          <div className={`${styles.fancyBox} ${styles.boxBackgroundWhite}`}>
            <ColorVelas />
            <h2>Velas API</h2>
            <a href="/#">See details</a>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <div
            className={`${styles.fancyBox} ${styles.frameGrey} ${styles.boxBackgroundGrey}`}
          >
            <GreyPolka />
            <p>Polkadot</p>
            <p>coming soon</p>
          </div>
          <div
            className={`${styles.fancyBox} ${styles.frameGrey} ${styles.boxBackgroundGrey}`}
          >
            <GreyAvalance />
            <p>Avalance</p>
            <p>coming soon</p>
          </div>
          <div
            className={`${styles.fancyBox} ${styles.frameGrey} ${styles.boxBackgroundGrey}`}
          >
            <GreySolana />
            <p>Solana</p>
            <p>coming soon</p>
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
        <img src={award} alt="awardpic" />
        <div>
          <div
            className={`${styles.fancyBox}  ${styles.frameOrangeLight} ${styles.boxBackgroundWhite}`}
          >
            8 years of on-hand experience in Kubernetes and blockchain
          </div>
          <div
            className={`${styles.fancyBox}  ${styles.framePurple} ${styles.boxBackgroundWhite}`}
          >
            We’re handling projects with a load of 1.5 million requests per day
          </div>
          <div
            className={`${styles.fancyBox}  ${styles.frameBlue} ${styles.boxBackgroundWhite}`}
          >
            Our team provides top-notch services for 99.9% of SLA
          </div>
        </div>
        <div>QUOTESSLIDESHOW</div>
      </section>
      <section
        className={`${styles.flexContainer} ${styles.flexDirectionColumn} ${styles.white}`}
      >
        <h1>Frequently Asked Questions: Basic Knowledge to Remind</h1>
        <div className={styles.flexContainer}>
          <div
            className={`${styles.fancyBox}  ${styles.frameGrey} ${styles.boxBackgroundWhite}`}
          >
            <h2>What are blockchain nodes?</h2>
            <p>
              Nodes are the “knots” of the blockchain systems interconnected to
              create the distributed network and secure it. One node can be
              launched on one separate device or be a part of the
              software-hardware complex where the node is allocated alongside
              others. There are a lot of types of nodes: Web3 industry has light
              nodes, archival nodes, mining nodes, masternodes, and others. Each
              has its own specialization in transferring information through the
              network.
            </p>
          </div>
          <div
            className={`${styles.fancyBox}  ${styles.frameGrey} ${styles.boxBackgroundWhite}`}
          >
            <h2>How do nodes work?</h2>
            <p>
              Depending on the type of node, each node has its own functions,
              states, and work procedures. But all-in-all, even blockchain nodes
              for sale exist to validate transactions and store the information
              about transactions. Nodes are unique tools of distributed systems
              as each of them stores the whole information about their network.
              With each new transaction in the blockchain, all nodes are
              updating at the same time to keep their information fresh.
            </p>
          </div>
          <div
            className={`${styles.fancyBox}  ${styles.frameGrey} ${styles.boxBackgroundWhite}`}
          >
            <h2>What is a blockchain API?</h2>
            <p>
              Any blockchain Application Programming Interface (API) is a
              developer’s tool to get access to the functionality of blockchain
              and implement it into any other project. Depending on the API
              itself, the access might be direct or limited with some kind of
              service interface that’s built upon the API. RPC Fast is the
              fastest API-based node-as-a-service blockchain industry deserves.
            </p>
          </div>
          <div
            className={`${styles.fancyBox}  ${styles.frameGrey} ${styles.boxBackgroundWhite}`}
          >
            <h2>How do I get blockchain API?</h2>
            <p>
              The best way to get the API for your needs is to read the
              documentation of the dedicated blockchain. There are lots of APIs
              available for different needs: Websockets, Rest APIs, Payment
              Processing APIs, Simple Query APIs, Blockchain Data API, and so
              on. RPC Fast, as nodes as a service, provides you with all the
              functionality of the selected network with the help of a
              blockchain API. Thus you can simply connect it with your project.
            </p>
          </div>
          <div
            className={`${styles.fancyBox}  ${styles.frameGrey} ${styles.boxBackgroundWhite}`}
          >
            <h2>What is blockchain architecture?</h2>
            <p>
              This type of architecture is a distributed network that keeps the
              data about all events that happened inside each node that
              participates in it. With such distributed architecture, the
              environment is pretty secure yet transparent and trustable. This
              technology is often applied for financial tools, but it’s gone far
              beyond in other industries now.
            </p>
          </div>
        </div>
      </section>
      <footer
        className={`${styles.flexContainer}  ${styles.flexDirectionColumn} ${styles.dark}`}
      >
        <div className={styles.flexContainer}>
          <div>
            <LogoMain className={styles.flexImage} />
            <LogoSide className={styles.flexImage} />
          </div>
          <div>
            Available blockchains
            <ul>
              <li>
                <a href="/#">Ethereum API</a>
              </li>
              <li>
                <a href="/#">Binance Smart Chain API</a>
              </li>
              <li>
                <a href="/#">Polygon API</a>
              </li>
              <li>
                <a href="/#">Velas API</a>
              </li>
            </ul>
          </div>
          <div>
            Resources
            <ul>
              <li>
                <a href="/#">Documentation</a>
              </li>
              <li>
                <a href="/#">Guides</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            Company
            <ul>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#">About us</a>
              </li>
              <li>
                <a href="/#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.flexContainer}>
            <div>
              <a href="/#">Tallinn, Vesivärava str 50-201, 10152, Estonia</a>
            </div>
            <div>
              <a href="/#">contact@rpcfast.com</a>
            </div>
            <div>
              <a href="/#">© RPC Fast API by Dysnix. 2022.</a>
            </div>
            <div>
              <a href="/#">Privacy Policy</a>
            </div>
            <div>
              <a href="/#">Terms of Use</a>
            </div>
          </div>
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
