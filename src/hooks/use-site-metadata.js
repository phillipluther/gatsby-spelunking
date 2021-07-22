import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
            email
            twitter
            bio
          }
        }
      }
    }  
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
