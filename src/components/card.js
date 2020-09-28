import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function SongCard({id, artistName,image, collectionName}) {
  return (
    <div>
      <Card
        hoverable
        id={id}
        style={{ width: 240 }}
        cover={
          <img
            alt={artistName}
            src={image}
          />
        }
      >
        <Meta title={artistName} description={collectionName} />
      </Card>
    </div>
  );
}

export default SongCard;
