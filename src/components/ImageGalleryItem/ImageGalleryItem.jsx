export const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
