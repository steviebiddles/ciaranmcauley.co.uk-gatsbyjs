/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = () => {
  if (window.FB) {
    const FB = window.FB;

    requestAnimationFrame(() => {
      FB.XFBML.parse();
    });
  }
};
