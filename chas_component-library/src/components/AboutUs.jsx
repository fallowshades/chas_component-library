const AboutUs = () => {
  return (
    <div>
      {' '}
      <div className="catGrid">
        <img src="./images/3.webp" alt="Katt 3" />
        <img src="./images/4.webp" alt="Katt 4" />
        <img src="./images/5.webp" alt="Katt 5" />
        <img src="./images/6.jpeg" alt="Katt 6" />
        <img src="./images/7.jpeg" alt="Katt 7" />
        <img src="./images/8.jpeg" alt="Katt 8" />
      </div>
      <div className="section">
        <h2>Om Oss</h2>
        <p>Lite information om vår kattklubb och vår kärlek till katter.</p>
        <p>
          Vi är en grupp kattälskare som älskar att dela vår passion för katter
          med andra. Vår kattklubb har funnits i flera år och vi är engagerade i
          att hjälpa katter och främja kattvård.
        </p>
      </div>
      <div className="section">
        <h2>Kontakt</h2>
        <p>
          Kontakta oss om du har frågor eller förslag. Vi älskar att höra från
          våra besökare.
        </p>
        <p>
          Du kan nå oss på följande e-postadress:
          <a href="mailto:kontakt@kattsidan.se">kontakt@kattsidan.se</a>
        </p>
      </div>
    </div>
  )
}
export default AboutUs
