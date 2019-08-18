/* eslint-disable react/prop-types */
import React from "react";
import ssrPrepass from "react-ssr-prepass";

import initializeUrqlClient from "./initialize-urql-client";

const withUrqlClient = App => {
  return class WithUrql extends React.Component {
    static async getInitialProps(ctx) {
      const { AppTree } = ctx;

      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const isBrowser = typeof window !== `undefined`;

      if (isBrowser) {
        return appProps;
      }

      const [urqlClient, ssrCache] = initializeUrqlClient();

      await ssrPrepass(<AppTree {...appProps} urqlClient={urqlClient} />);

      const urqlState = ssrCache.extractData();

      return {
        ...appProps,
        urqlState
      };
    }

    constructor(props) {
      super(props);

      if (props.urqlClient) {
        this.urqlClient = props.urqlClient;
      } else {
        const [urqlClient] = initializeUrqlClient(props.urqlState);
        this.urqlClient = urqlClient;
      }
    }

    render() {
      return <App {...this.props} urqlClient={this.urqlClient} />;
    }
  };
};

export default withUrqlClient;
