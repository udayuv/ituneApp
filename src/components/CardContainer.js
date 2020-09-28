import React from "react";
import SongCard from "./card";
import { Row, Col } from "antd";
import NoResults from "./NoResult";

function CardContainer({ songList, count }) {
  if (songList === undefined) {
    songList = [];
  }
  return (
    <div>
      <Row>
      {count <= 0 ? ( <NoResults/>) : null}
        {songList.map((song, key) => (
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 3, offset: 2 }}>
            <SongCard
              id={key}
              artistName={song.artistName}
              image={song.artworkUrl100}
              collectionName={song.collectionCensoredName}
              preview={song.previewUrl}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardContainer;
