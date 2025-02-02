import React from 'react';

export const AlbumArtist = (props) => {
  return (
    <a
      className="album-artist"
      href={props.artistUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.artistName}
    </a>
  );
};
