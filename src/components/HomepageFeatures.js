import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Our Clan',
    Svg: require('../../static/img/giftd-icon.svg').default,
    description: (
      <>
        GIFTD is an international clan that strives to achieve a balance between competitive play and maintaining a social atmosphere.
        <br></br>
        We participate in advances/skirmishes daily and will compete in all campaigns.
      </>
    ),
  },
  {
    title: 'Our TeamSpeak',
    Svg: require('../../static/img/teamspeak-icon.svg').default,
    description: (
      <>
        We use TeamSpeak as our primary method for voice communication.
        <br></br>
        <b>Address:</b> giftd.teamspeak3.org
        <br></br>
        <b>Password:</b> beyonce

      </>
    ),
  },
  {
    title: 'Our Discord',
    Svg: require('../../static/img/discord-icon.svg').default,
    description: (
      <>
        For general chatter, important announcements, and anything outside of voice communication, we use Discord.
        <br>
        </br>
        <b>Discord:</b> <a href="https://discord.gg/NZKp8f3DFT" alt="Discord Invite">https://discord.gg/NZKp8f3DFT</a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
