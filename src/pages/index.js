import * as React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import Seo from '../components/seo';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';

const IndexPage = () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <Seo title="Home" />
        <h2>Read Blog Posts</h2>
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </Layout>
    </>
  );
}

export default IndexPage;
