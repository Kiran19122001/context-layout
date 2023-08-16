import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="b1-cont">
              <p className="cont-heads">Left Navbar Menu</p>
              <p>item 1</p>
              <p>item 2</p>
              <p>item 3</p>
              <p>item 4</p>
            </div>
          ) : null}
          {showContent ? (
            <div className="b2-cont">
              <p className="cont-heads">content</p>
              <p className="para-cont">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut mattis quam. Integer posuere nunc vel sem dapibus, ut gravida
                nibh maximus. Donec ac enim tincidunt, maximus orci id, posuere
                dolor.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="b3-cont">
              <p className="cont-heads">Right Navbar menu</p>
              <p className="boxes">Ad 1</p>
              <p className="boxes">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
