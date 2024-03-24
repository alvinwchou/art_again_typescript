interface GalleryProps {
  title: string;
  img: string;
  alt: string;
  artist: string;
}
export default function Gallery({ title, img, alt, artist }: GalleryProps) {
  return (
    <div className="pieceOfArt">
      <h3>{title}</h3>
      <img src={img} alt={alt} />
      <br />
      <p>Artist: {artist}</p>
    </div>
  );
}
