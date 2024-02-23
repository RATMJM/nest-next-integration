'use client';

import Image from 'next/image';

// const galleryIcons = [
//   {
//     iconURL: '/images/1.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/1.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/1.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/2.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/3.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/1.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/2.png',
//     title: '그림1',
//   },
//   {
//     iconURL: '/images/3.png',
//     title: '그림1',
//   },
// ];
// 1시간25분
export default function GalleryListCard({
  galleryItems,
}: {
  galleryItems: object;
}) {
  console.log('여기옵니까?  ' + JSON.stringify(galleryItems));
  return (
    <div className="my-2 p-2 border-b border-gray-300 hover:cursor-pointer">
      <div className="flex w-full">
        <div className="w-16">
          <Image
            alt="이름"
            src={galleryItems.imageUrl}
            width={50}
            height={30}
            className="  rounded-200  bg-slate-500 "
          />
        </div>
        <div className="flex flex-col w-full text-xs">
          <h2 className="font-semibold text-sm mb-1">{galleryItems.title}</h2>
          <div className="flex gap-2">
            <p>{galleryItems.authorName}</p>
            <p>{galleryItems.type}</p>
          </div>
          <div className="flex gap-2">
            <p>{galleryItems.year}</p>
            <p>{galleryItems.imageUrl}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
