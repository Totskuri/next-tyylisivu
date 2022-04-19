import PropTypes from 'prop-types';
import Link from 'next/link';
import Layout from '@components/Layout';
import StaticPropsUtil from 'util/StaticPropsUtil';
import fs from 'fs';
import matter from 'gray-matter';

const Blog = ({settings, content, posts}) => {
    return (
        <Layout
            settings={settings}
            content={content}
        >
            <main>
                {posts.map((post) => {
                    const {slug, frontmatter} = post;
                    const {title, date, bannerImage} = frontmatter;

                    return (
                        <article key={title}>
                            <Link href={`/posts/${slug}`}>
                                <a><h1>{title}</h1></a>
                            </Link>
                            <h3>{date}</h3>
                        </article>
                    );
                })}
            </main>
        </Layout>
    );
};

Blog.propTypes = {
    settings: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object),
};

Blog.defaultProps = {
    posts: [],
};

export async function getStaticProps() {
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const {data: frontmatter} = matter(readFile);

        return {
            slug,
            frontmatter,
        };
    });

    return {
        props: {
            settings: StaticPropsUtil.fetchSiteSettings(),
            content: {
                title: 'Etusivu',
                description: 'Teemme helposti päivitettäviä WordPress-verkkosivuja. Meiltä myös verkkokaupat, hakukoneoptimointi ja graafinen sunnittelu.',
                image: '/default.png',
                imageAlt: 'Tyylisivu - suunnistajasi digitalisaation viidakossa',
            },
            posts,
        },
    };
}

export default Blog;
