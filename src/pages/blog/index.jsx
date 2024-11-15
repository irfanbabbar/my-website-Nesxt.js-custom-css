// pages/blog/index.js
import styles from '../../styles/blog.module.css';
import Link from 'next/link';

const posts = [
  {
    id: '1',
    title: 'Understanding Next.js',
    excerpt: 'A comprehensive guide to building applications with Next.js.',
    date: '2024-11-01',
  },
  {
    id: '2',
    title: 'Styling in React',
    excerpt: 'Different ways to style your React applications effectively.',
    date: '2024-11-10',
  },
  {
    id: '3',
    title: 'Styling in Tailwind Css',
    excerpt: 'Different ways to style your Tailwind Css applications effectively.',
    date: '2024-11-05',
  },
  {
    id: '4',
    title: 'Understanding Typesrepit',
    excerpt: 'Different ways to Understanding Typesrepit applications effectively.',
    date: '2024-11-12',
  },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <div className={styles.blog}>
      <h2>Blog</h2>
      <div className={styles.postList}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h3>{post.title}</h3>
            <p className={styles.date}>{post.date}</p>
            <p>{post.excerpt}</p>
            <Link className={styles.readMore} href={`/blog/${post.id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
