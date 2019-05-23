import React  from 'react'
import smoothScroll from 'smoothscroll-polyfill'

import './style.scss';
smoothScroll.polyfill()

export const scrollTo = (id, opt = { behavior: 'smooth' }) => {
  window.scroll({
    top: document.querySelector(`.${id}`).offsetTop - 70,
    behavior: opt.behavior
  })

  window.history.pushState(null, null, `#${id}`)
}

class NavItem extends React.Component {
  static defaultProps = {
    behavior: 'smooth'
  }

  handleClick = (e) => {
    e.preventDefault()

    const id = e.target
      .getAttribute('href')
      .substring(1)

    scrollTo(id, {
      behavior: this.props.behavior
    })
  }

  render() {
    const { children, link } = this.props;
    return (
      <div className="nav-item">
        <a
          onClick={this.handleClick}
          href={link}
          className="nav-item__link"
        >
          { children }
        </a>
      </div>
    )
  }
}

export default NavItem;