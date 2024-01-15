import { FaHome } from 'react-icons/fa'
import { FaCat } from 'react-icons/fa6'
import { FcAbout } from 'react-icons/fc'

import { Badge } from 'flowbite-react'
const Menu = () => {
  return (
    <header>
      <h1>Kattsidan</h1>
      <nav>
        <div className="menu-toggle">
          <i className="fas fa-bars"></i>
        </div>

        <div className={'menu flex flex-row gap-2'}>
          <Badge color="gray" icon={FaHome}>
            Start
          </Badge>

          <Badge color="gray" icon={FaCat}>
            <span>Katter</span>
          </Badge>

          <Badge color="gray" icon={FcAbout}>
            {' '}
            <span> Om oss</span>
          </Badge>

          <Badge color="gray" icon={FcAbout}>
            Kontakt
          </Badge>
        </div>
      </nav>
    </header>
  )
}
export default Menu
