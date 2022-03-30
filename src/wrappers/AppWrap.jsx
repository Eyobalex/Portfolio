import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
const AppWrap = (Conponent, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />

      <div className="app__wrapper app_flex">
        <Conponent />

        <div className="copyright">
          <p className="p-text">@2022</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>

      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap