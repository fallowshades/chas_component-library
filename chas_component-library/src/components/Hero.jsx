import { Button } from 'flowbite-react'
import { Alert } from 'flowbite-react'
import { useState } from 'react'
const Hero = () => {
  const [toggle, setToggle] = useState(false)

  const handleButtonClick = () => {
    setToggle(!toggle)

    // Set a timeout to close the alert after 3000 milliseconds (adjust the duration as needed)
    setTimeout(() => {
      setToggle(false)
    }, 3000)
  }
  return (
    <div className="container">
      <div className="section section1">
        <div className="section1Text">
          <h2>Välkommen till vår kattsida</h2>
          {toggle && <Alert color={'info'}>you are not welcome</Alert>}
          <p>
            Här kan du upptäcka spännande fakta om katter och deras beteende.
            Utforska våra artiklar och bilder och lär dig mer om dessa underbara
            varelser.
          </p>
          <p>
            Om du älskar katter lika mycket som vi gör, varför inte gå med i vår
            kattklubb? Klicka på knappen nedan för att bli medlem!
          </p>
          <Button onClick={handleButtonClick}>Bli medlem</Button>
        </div>
        <img src="images/1.webp" alt="Katt 1" />
      </div>
    </div>
  )
}
export default Hero
