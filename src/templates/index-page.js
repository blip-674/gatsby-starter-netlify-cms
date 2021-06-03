import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import Content from '../components/sections/home/Content';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-circular-progressbar/dist/styles.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/pe-icon-7-stroke.css';
import '../assets/css/default.css';
import '../assets/css/style.css';
import '../index.css';



const pagelocation = 'Homepage'
export const IndexPageTemplate = ( {data} ) => {
  return (
    <Fragment>
      <MetaTags>
        <title>{data.title} | {pagelocation}</title>
        <meta
          name="description"
          content="#"
        />
      </MetaTags>
      <Header data={data}/>
      <Content data={data}/>
      <Footer footer={{ style: "", logo: "assets/img/logo-white.png" }} />
    </Fragment>
  );
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      data={frontmatter}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      title
      logo {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      quoteImage {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      banner {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            src
          }
        }
      }
      heading
      subheading
      aboutUs {
        title
        description
      }
      services {
        title
        heading
        servicecard1 {
          Icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          title
          description
        }
        servicecard2 {
          Icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          title
          description
        }
        servicecard3 {
          Icon {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          title
          description
        }
      }
    }
  }
}

`
