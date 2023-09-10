import styles from "./style.module.css"

const Footer = () => {
  return (
    <>
    <div className={styles.footer_main}>
        <div className={styles.row1}>
            <p>About Us</p>
            <p> Explanation</p>
            <p>License Agreement </p>
            <p>Data protection</p>
            <p> Contact Made-in-China.com</p>
            <p>Quick selection products</p>
        </div>
        <div className={styles.row2}>
            <p>Copyright ©2023 Focus Technology Co.,Ltd.  All rights reserved <br />
            Focus Technologie is not responsible for any inconsistencies between the English version and other versions of this website. In the event of any discrepancies, the English version will prevail. By using this website, you agree to our terms and conditions.</p>
        </div>
    </div>
</>
  )
}

export default Footer