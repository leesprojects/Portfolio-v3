import './Sidebar.scss'

function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log("Scrolling To", element)
      element.scrollIntoView({ 'behavior': 'smooth'});
    }
  }
  
  return (
    <div id="page__header" className="section__header">
      <ul className="header__ul">
        <li>
          <a onClick={() => scrollTo("section__landing")}>Landing</a>
        </li>
        <li>
          <a onClick={() => scrollTo("section__projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => scrollTo("section__footer")}>Footer</a>
        </li>
      </ul>
      <div className="button__toggle"><p></p></div>
    </div>
  )
}

export default Header;