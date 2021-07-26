import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Seo from '../components/seo';
import usePosts from '../hooks/use-posts';

const IndexPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
      <h2>Read Blog Posts</h2>
      {posts.map((post) => (
        <PostPreview post={post} key={post.slug} />
      ))}
    </Layout>
  );
}

export default IndexPage;
