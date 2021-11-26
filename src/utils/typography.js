import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import "@fontsource/nunito"
import "@fontsource/prata"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a:{
      boxShadow: `none`,
      color: `#000`,
      textDecoration: `solid`,
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily:`Prata, serif`,
      fontWeight: `500`,
    },
    "p,li": {
      fontFamily:`Nunito, sans-serif`,
      marginBottom: `0`,
      // fontSize: `18px`,
    },
  }
}


delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
