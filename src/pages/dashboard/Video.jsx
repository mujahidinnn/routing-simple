const Video = () => {
  document.title="Routing | Video"
  return (
    <div>
      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/ioou87ehs5g"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
