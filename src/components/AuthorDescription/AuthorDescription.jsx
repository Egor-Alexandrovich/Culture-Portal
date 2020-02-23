import React from 'react';
import { useParams } from "react-router-dom";


function AuthorDescription() {
  const { id } = useParams();
  const index = data.findIndex(post => post.id === id);
  const { name, years, picture, timeline, works, gallery, video, activity } = data[index];
  const timelineElem = timeline ? <Timeline timeline={timeline}/> : null;
  const worksElem = works ? <WorksList works={works}/> : null;
  const galleryElem = gallery ? <PhotoGallery gallery={gallery}/> : null;
  const videoElem = video ? <YouTubeVideo video={video}/> : null;
  const mapElem = activity ? <ActivityMap activity={activity}/>  : null;
  return (
    <div>
      <AuthorIdentity 
        name = { name }
        years = { years }
        picture = { picture }
      />
      { timelineElem, worksElem, galleryElem,videoElem, mapElem }
    </div>
  );
}

export default AuthorDescription;