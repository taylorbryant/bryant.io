export default {
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit"
  },
  fontWeights: {
    body: 400,
    heading: 600
  },
  lineHeights: {
    body: 1.5
  },
  // Extract reusable bits into the theme
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "#0366d6",
      textDecoration: "none"
    },
    h1: {
      fontFamily: "heading",
      fontSize: "2em",
      fontWeight: "heading",
      borderBottom: "1px solid #eaecef",
      paddingBottom: "0.3em"
    },
    h2: {
      borderBottom: "1px solid #eaecef",
      fontSize: "1.5em",
      fontWeight: "heading",
      paddingBottom: "0.3em"
    },
    p: {
      fontFamily: "body",
      fontFamily: "body",
      lineHeight: "body",
      marginTop: 0,
      marginBottom: 16
    },
    ul: {
      paddingLeft: "2em"
    },
    ol: {
      paddingLeft: "2em"
    },
    code: {
      backgroundColor: "rgba(27,31,35,.05)",
      borderRadius: 3,
      fontSize: "85%",
      margin: 0,
      padding: "0.2em 0.4em"
    },
    img: {
      backgroundColor: "#fff",
      boxSizing: "content-box",
      maxWidth: "100%"
    }
  }
};
