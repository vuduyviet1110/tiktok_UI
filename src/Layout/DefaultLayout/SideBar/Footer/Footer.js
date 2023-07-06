import styles from './Footer.module.scss';
function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Infor}>
        <a href="https://www.google.com/">About</a>
        <a href="https://www.google.com/">Newsroom</a>
        <a href="https://www.google.com/">Contact</a>
        <a href="https://www.google.com/">Careers</a>
        <a href="https://www.google.com/">ByteDance</a>
      </div>
      <div className={styles.Infor}>
        <a href="https://www.google.com/">TikTok for Good</a>
        <a href="https://www.google.com/">Advertise</a>
        <a href="https://www.google.com/">Developers</a>
        <a href="https://www.google.com/">Transparency</a>
        <a href="https://www.google.com/">TikTok Rewards</a>
        <a href="https://www.google.com/">TikTok Embeds</a>
      </div>
      <div className={styles.Infor}>
        <a href="https://www.google.com/">Help</a>
        <a href="https://www.google.com/">Safety</a>
        <a href="https://www.google.com/">Terms</a>
        <a href="https://www.google.com/">Privacy</a>
        <a href="https://www.google.com/">Creator Portal</a>
        <a href="https://www.google.com/">Community Guidelines</a>
      </div>
      <span className={styles.Copyright}>© 2023 TikTok</span>
    </div>
  );
}

export default Footer;
