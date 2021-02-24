import React, { useState } from "react";
import Layout from './layout';
import { Video } from "cloudinary-react";

const publicIds = ["v1614178444/cat_jht2fz", "snail_by7bug", "spider_sfcd7d", "v1614178418/deer_s23les"];

export default function App() {
  const [videoIndex, setVideoIndex] = useState(0);

  const getNextIndex = () => {
    return videoIndex + 1 < publicIds.length ? videoIndex + 1 : 0;
  };

  return (
    <Layout>
      <div>
        <button id="toggle-fluid" onClick={() => setVideoIndex(getNextIndex())}>Next</button>
      </div>
      <div style={{
        paddingTop: 5,
      }}>
      <Video
        key={publicIds[videoIndex]}
        controls
        crop="scale"
        width="400"
        allowfullscreen
        cloudName="rosiefaulkner"
        publicId={publicIds[videoIndex]}
        muted
        autoPlay
      />
      </div>
    </Layout>
  );
}


