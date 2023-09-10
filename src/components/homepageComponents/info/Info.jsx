import styles from "./style.module.css"
const Info = () => {
  return (
    <>
    <div className={styles.info_main}>
        <h5 className='mb-4'>Heiße Gegenstände</h5>
        <div className="row">
            <div className={`col-md-2 ${styles.column}`}>
                <p>Kleidung</p>
                <p>Geschenk, Kunstgewerbe, Kolle</p>
                <p>Spielzeug, Spiel und Partysartikel</p>
                <p>Textil</p>
            </div>
            <div className={`col-md-2 ${styles.column}`}>
                <p>Konsumselektrik</p>
                <p>Autosteile und Zusatz</p>
                <p>Verkehrsmittel und Transport</p>
                <p>Motorrad und Kleinmotorrad</p>
            </div>
            <div className={`col-md-2 ${styles.column}`}>
                <p>Sport, Fitness und Entspannung</p>
                <p>Kosmetik, Selbstpflegung</p>
                <p>Absatz und Absatzförderungspro</p>
                <p>Kiste und Gepäck</p>
            </div>
            <div className={`col-md-2 ${styles.column}`}>
                <p>Elektrikartikel</p>
                <p>Computer</p>
                <p>ktElektrikbauteile</p>
                <p>Baumaterial und Artikel</p>
            </div>
            <div className={`col-md-2 ${styles.column}`}>
                <p>Kleidung</p>
                <p>Geschenk, Kunstgewerbe, Kolle</p>
                <p>Spielzeug, Spiel und Partysartikel</p>
                <p>Textil</p>
            </div>
            <div className={`col-md-2 ${styles.column}`}>
                <p>Elektrikartikel</p>
                <p>Computer</p>
                <p>ktElektrikbauteile</p>
                <p>Baumaterial und Artikel</p>
            </div>
        </div>
    </div>
</>
  )
}

export default Info