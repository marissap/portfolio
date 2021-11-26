import React, { useEffect } from "react"
import Header from "../components/header"

import { rhythm } from "../utils/typography"

const Layout = ({ location, children }) => {

  // useEffect(() => {

  //   const root = document.querySelector('.main-layout');

  //   const cursor = document.createElement('div');
  //   cursor.classList.add('cursor');
  //   root.appendChild(cursor);

  //   let mouseCursor = document.querySelector(".cursor")

  //   window.addEventListener('mousemove', (e) => {
  //       setPosition(mouseCursor, e);
  //   });
  // }, []);

  // function setPosition(element, e) {
  //     element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  // }

  return (
    <div
      className="main-layout"
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {/* <Header location={location}/> */}
      <main>{children}</main>
      {/* <footer>
        <p style={{ fontSize: `12px` }}>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> by Marissa Phul
        </p>
      </footer> */}
    </div>
  )
}

export default Layout
