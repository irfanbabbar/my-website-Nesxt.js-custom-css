// pages/blog/[id].js
import { useRouter } from 'next/router';
import styles from '../../styles/blogPost.module.css';

const posts = {
  '1': {
    title: 'Understanding Next.js',
    content: 'Detailed content about Next.js...',
    date: '2023-11-01',
  },
  '2': {
    title: 'Styling in React',
    content: 'Detailed content about styling in React...',
    date: '2023-11-10',
  },
  '3': {
    title: 'Styling in Tailwind Css',
    content: 'Detailed content about styling in Tailwind Css...',
    date: '2023-11-10',
  },
  '4': {
    title: 'Understanding Typesrepit',
    content: 'Detailed content about Understanding Typesrepit...',
    date: '2023-11-10',
  },
  // Add more posts as needed
};

export default function BlogPost() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts[id];

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.content}>{post.content}</div>
    </div>
  );
}
