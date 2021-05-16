import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import React from 'react';
import { Player } from 'video-react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import DisplayError from './ErrorMessage';
import '../node_modules/video-react/dist/video-react.css';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  max-width: var(--maxWidth);
  img {
    width: 100%;
    height: 100%;
  }
`;

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Video(where: { id: $id }) {
      id
      name
      description
      videoId
      status
      hoster {
        name
        link
        param
      }
    }
  }
`;

const SingleProduct = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: data.Video.videoId,
        provider: 'youtube',
      },
    ],
  };
  const text = data.Video.description.split('\n').map((item) => (
    <span>
      {item}
      <br />
    </span>
  ));
  return (
    <ProductStyles>
      {/* <Head>
        <title>Sick Fits | {data.Product.name}</title>
      </Head> */}
      <div className="details">
        <Plyr source={videoSrc} />
        <h2>{data.Video.name}</h2>
        <p>{text}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleProduct;
