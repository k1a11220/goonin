import React from "react";
import { Helmet } from "react-helmet";
import Image from "@src/images/og.png";

const SEO = ({ title, desc }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>

      <meta name="description" content={desc} />
      <meta name="image" content={Image} />
      <meta property="og:image" content={Image} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={Image} />
    </Helmet>
  );
};

export default SEO;
