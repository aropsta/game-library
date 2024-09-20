import useVideos from "../hooks/useVideos";

interface Props {
  gameId: number;
}

//Component to display video for game details
const GameVideo = ({ gameId }: Props) => {
  const { error, isLoading, data } = useVideos(gameId);
  const first = data?.results[0];
  if (isLoading) return null;
  if (error) throw error;

  console.log(data);

  return first ? (
    <video controls src={first.data[480]} poster={first.preview} />
  ) : null;
};

export default GameVideo;
