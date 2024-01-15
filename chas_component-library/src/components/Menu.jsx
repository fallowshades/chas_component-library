const Menu = () => {
  return (
    <header>
      <h1>Kattsidan</h1>
      <nav>
        <div class="menu-toggle">
          <i class="fas fa-bars"></i>
        </div>

        <div class="menu">
          <a href="#" class="fa fa-home">
            {' '}
            Start
          </a>
          <a href="#" class="fa-brands fa-github-square">
            {' '}
            Katter
          </a>
          <a href="#" class="fa fa-info">
            {' '}
            Om oss
          </a>
          <a href="#" class="fa fa-envelope">
            {' '}
            Kontakt
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Menu
