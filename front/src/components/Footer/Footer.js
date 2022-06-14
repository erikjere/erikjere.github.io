import "./Footer.css"

const Footer = (props) => {
  const setPageHome = () => {
    props.setPage("Home")
  }
  const setPageAbout = () => {
    props.setPage("About")
  }
  return (
    <footer id="footer">
      <button className="link" onClick={setPageHome}>
        Home
      </button>
      <button className="link" onClick={setPageAbout}>
        About
      </button>
    </footer>
  )
}

export default Footer
