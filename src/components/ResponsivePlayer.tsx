import ReactPlayer from 'react-player';

export default function ResponsivePlayer({ url }: { url: string }) {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        config={{
          file: {
            forceVideo: true,
          },
        }}
        url={[
          {
            src: url,
            type: 'video/mp4',
          },
        ]}
        width='100%'
        height='100%'
        loop
        playing
        muted={true}
      />
    </div>
  );
}
