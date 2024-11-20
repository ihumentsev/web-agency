import { createGlobalStyle } from 'styled-components'

// Типизация для пропсов GlobalStyle
interface GlobalStyleProps {
  locale: string;
}
export const lightTheme = {
  colors: {
    background: '#11112B',
    text: '#fff',
    backgroundGrey: "#5D6A70",
    hoverBackground: "#dfe3e6"
  },
  shadows: {
    boxShadow: '1px 1px 6px rgba(51, 51, 51, 0.15)',
  },
  inputBorders: {
    border: "1px solid #BEBFC1",
    color: "#040404",
    backgroundColor: "transparent"
  },
  borders: {
    border: "solid 1px #fff",
    
  },
  // Другие свойства темы...
};

export const darkTheme = {
  colors: {
    darckBackground: '#11112B',
    lightBackground: '#D5D9E5',
    colorBackground: '#92DEED',
    lightText: '#ffffff',
    darkText: '#11112B',
    colorText: '#92DEED',
    backgroundGrey: "rgb(from #ececfb r g b/.12)",
    hoverBackground: "rgb(from #ececfb r g b/.12)"
  },
  shadows: {
    boxShadow: '1px 1px 6px rgba(255, 255, 255, 0.5)',
  },
  inputBorders: {
    border: "solid 1px #fff",
    color: "#fff",
    backgroundColor: "transparent"
  },
  borders: {
    border: "solid 1px #000000",
    
  },
  fontsTitle: {
    default: "'Space Grotesk', sans-serif",
    ru: "'Manrope', sans-serif",
    en: "'Space Grotesk', sans-serif",
    pl: "'Space Grotesk', sans-serif",
    uk: "'Manrope', sans-serif",
  },
  fontsText: {
    default: "'Poppins', sans-serif",
    ru: "'Inter', sans-serif",
    en: "'Poppins', sans-serif",
    pl: "'Poppins', sans-serif",
    uk: 'Inter',
  }
  // Другие свойства темы...
};


const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
@font-face {
  font-family: 'Space Grotesk';
  src: url('/fonts/SpaceGrotesk-VariableFont_wght.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins-Bold';
  src: url('/fonts/Poppins-Bold.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins-ExtraBold';
  src: url('/fonts/Poppins-ExtraBold.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/InterTight-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lobster';
  src: url('/fonts/Lobster-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Pacifico';
  src: url('/fonts/Pacifico-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Ustroke';
  src: url('/fonts/Ustroke-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

html,
  body {
    background-color: ${({ theme }) => theme.colors.darckBackground};
    /* background-color: #fff; */
    color: ${({ theme }) => theme.colors.lightText};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    height: 100%;
    
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
   
  }

  h1, h2, h3, h4, h5 {
     font-family: 'Space Grotesk';
     margin: 0;
     
  }
  .ru, .uk{
    font-family: 'Montserrat Alternates'
  }
  p {
     font-family: ${({ theme, locale }) => theme.fontsText[locale] || theme.fontsText.default};
  }
 

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
