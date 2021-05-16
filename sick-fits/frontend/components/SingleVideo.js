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

const SINGLE_VIDEO_QUERY = gql`
  query SINGLE_VIDEO_QUERY($id: ID!) {
    Video(where: { id: $id }) {
      name
      description
      id
      rating
      hoster {
        name
        link
        param
      }
      videoId
    }
  }
`;

const SingleVideo = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_VIDEO_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  console.log(data.Video.hoster.link + data.Video.hoster.param);
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: data.Video.videoId,
        provider: data.Video.hoster.name.toLowerCase(),
      },
    ],
  };

  return (
    <ProductStyles>
      {/* <Head>
        <title>Sick Fits | {data.Product.name}</title>
      </Head> */}
      <div className="details">
        <Plyr source={videoSrc} />
        <h2>{data.Video.name}</h2>
        <p>{data.Video.description}</p>
        <p>{data.Video.rating}</p>
      </div>
    </ProductStyles>
  );
};

export default SingleVideo;
