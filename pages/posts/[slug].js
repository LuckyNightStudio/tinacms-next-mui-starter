import { staticRequest } from "tinacms";
import { Layout } from "../../components/Layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useTina } from "tinacms/dist/edit-state";
import { Box, Container, Typography } from "@mui/material";

const query = `query getPost($relativePath: String!) {
  getPostDocument(relativePath: $relativePath) {
    data {
      title
      body
    }
  }
}
`;


const components = {
  h1: (props) => {
    return (
      <Typography variant='h1' mb={2}>{props.children}</Typography>
    );
  },
  h2: (props) => {
    return (
      <Typography variant='h2' mb={2}>{props.children}</Typography>
    );
  },
  h3: (props) => {
    return (
      <Typography variant='h3' mb={2}>{props.children}</Typography>
    );
  },
  h4: (props) => {
    return (
      <Typography variant='h4' mb={2}>{props.children}</Typography>
    );
  },
  h5: (props) => {
    return (
      <Typography variant='h5' mb={2}>{props.children}</Typography>
    );
  },
  h6: (props) => {
    return (
      <Typography variant='h6' mb={2}>{props.children}</Typography>
    );
  },
  p: (props) => {
    return (
      <Typography mb={2}>{props.children}</Typography>
    );
  },
  italic: (props) => {
    return (
      <Typography fontStyle='italic' >{props.children}</Typography>
    );
  },
  bold: (props) => {
    return (
      <Typography fontWeight={600} >{props.children}</Typography>
    );
  },
  strikethrough: (props) => {
    return (
      <Typography textDecoration={'line-through'} >{props.children}</Typography>
    );
  },
  underline: (props) => {
    return (
      <Typography textDecoration={'underline'} >{props.children}</Typography>
    );
  },
  ul: (props) => {
    return (
      <Typography component='ul'>{props.children}</Typography>
    );
  },
  ol: (props) => {
    return (
      <Typography component='ol'>{props.children}</Typography>
    );
  },
  img: ({url, alt}) => {
    return (
      <img src={url} alt={alt} style={{maxWidth: '100%', margin: 'auto', marginTop: 20, marginBottom: 20 }} />
    )
  }
};

const Blog = (props)=> {
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  if(!data?.getPostDocument?.data) {
    return (
      <></>
    )
  }
  const { title, body } = data.getPostDocument.data
  return (
    <Layout title={`${title} | The Pixie Booth`}>
      <Box p={4}>
        <Container maxWidth='md'>
          <Typography variant='h1' align='center' mb={5}>
            {title}
          </Typography>
          <TinaMarkdown content={body} components={components} />
        </Container>
      </Box>
    </Layout>
  )
}
export default Blog

export const getStaticPaths = async () => {
  const postsResponse = await staticRequest({
    query: `{
        getPostList{
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }`
  });
  const paths = postsResponse.getPostList.edges.map((x) => {
    return { params: { slug: x.node.sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: ctx.params.slug + ".mdx",
  };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch (error) {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      variables,
    },
  };
};
