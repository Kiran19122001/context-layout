import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'
//  showContent: true,
//   showLeftNavbar: true,
//   showRightNavbar: true,
class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value

          const onContentCHange = () => {
            onToggleShowContent()
          }

          const onRightNavCHange = () => {
            onToggleShowRightNavbar()
          }
          const onLeftNavCHange = () => {
            onToggleShowLeftNavbar()
          }

          return (
            <div className="layout-header">
              <h1 className="head">Layout</h1>
              <form className="form-inputs">
                <div className="input-cont">
                  <input
                    type="checkbox"
                    id="cont"
                    checked={showContent}
                    onChange={onContentCHange}
                  />
                  <label htmlFor="cont">Content</label>
                </div>
                <div className="input-cont">
                  <input
                    type="checkbox"
                    id="lf"
                    checked={showLeftNavbar}
                    onChange={onLeftNavCHange}
                  />
                  <label htmlFor="lf">Left Navbar</label>
                </div>
                <div className="input-cont">
                  <input
                    type="checkbox"
                    id="rf"
                    checked={showRightNavbar}
                    onChange={onRightNavCHange}
                  />
                  <label htmlFor="rf">Right Navbar</label>
                </div>
              </form>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default ConfigurationController
