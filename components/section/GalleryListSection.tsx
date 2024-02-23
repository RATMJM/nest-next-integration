import Link from 'next/link';
import GalleryListCard from '../card/GalleryListCard';

export default function GalleryListSection({
  galleryItems,
}: {
  galleryItems: [];
}) {
  //   console.log(JSON.stringify(galleryItems) + '  dudhqslRK???');
  return (
    <section className="p-4">
      <div className="flex w-full justify-between">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <Link href={'/'}>갤러리</Link>
        </div>
        <Link href={'/upload'}>upload</Link>
      </div>

      <div className="bg-gray-300 w-full flex h-1 my-2"></div>
      {/* shop list */}
      {/* <GalleryListCard galleryItems={galleryItems} />  */}
      {galleryItems.map((galleryItems: [], index: number) => (
        <Link key={index} href={`/gallery/${galleryItems.year}`}>
          <GalleryListCard galleryItems={galleryItems} />
        </Link>
      ))}

      {/* <div>
        {Object(galleryItems).map((gallery: object, index: number) => (
          <GalleryListCard key={index} gallery={gallery} />
        ))}
      </div> */}
    </section>
  );
}
