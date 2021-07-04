interface Props {
  videoPath: string;
}
export function VideoDialog({videoPath}: Props) {
  return (
    <div className="max-w-560 max-h-315 mx-15 md:mx-0 flex items-center content-center">
      <iframe width="100%" height="100%" src={videoPath} title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
  );
}

VideoDialog.defaultProps = {
  videoPath: 'https://www.youtube.com/embed/a77-kdSOpIs'
}
