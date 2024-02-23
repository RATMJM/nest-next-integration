import Link from 'next/link';
import GalleryListSection from '../../components/section/GalleryListSection';

async function getGalleryItems() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  const galleryItems = await (
    await fetch(`https://localhost:9443/users/findAll`)
  ).json();

  return galleryItems;
}

export default async function Gallery() {
  const galleryItems = await getGalleryItems();
  //   console.log('여기이이이' + JSON.stringify(galleryItems));
  return (
    <div>
      <GalleryListSection galleryItems={galleryItems} />
    </div>
  );
}
