import React from "react";
import useVideos from "../hooks/useVideos";

interface Props {
  gameId: number;
  slug: string;
}

const GameVideo = ({ gameId, slug }: Props) => {
  const { error, isLoading, data } = useVideos(slug);
  const first = data?.results[0];
  if (isLoading) return null;
  if (error) throw error;

  console.log(data);

  return first ? (
    <video controls src={first.data[480]} poster={first.preview} />
  ) : null;
};

export default GameVideo;
