import { request, gql } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Card from '../../components/Card/Card';
import { IContents } from '../../interfaces';

export default function Portfolios(props: IContents) {
  const contents = props.categories[0].contents;
  return (
    <>
      <Head>
        <title>Portfolios - Esto Triramdani N</title>
        <meta name="description" content="Portfolios by Esto Triramdani N." />
      </Head>
      <div className="container">
        <h2>Portfolios</h2>
        <p>
          These are portfolios I have made so far. Mostly I work with JavaScript
          and its libraries, frameworks, or tools.
        </p>
        <div className="row">
          {contents.map((content) => (
            <Card
              id={content.id}
              key={content.id}
              cover={content.cover.url}
              description={content.description.html}
              subtitles={content.subtitles}
              title={content.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = gql`
    query Category {
      categories(where: { slug: "portfolios" }) {
        id
        name
        slug
        contents {
          id
          cover {
            id
            url
          }
          slug
          title
          subtitles
          description {
            html
          }
          createdAt
          updatedAt
        }
      }
    }
  `;
  const url =
    'https://api-ap-south-1.graphcms.com/v2/cl0xjjqhr3gir01xm3p5f4dea/master';

  const response: IContents = await request(url, query);
  return {
    props: response,
  };
};
