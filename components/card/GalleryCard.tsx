'use client';

import Image from 'next/image';
import Link from 'next/link';

const galleryIcons = [
  {
    iconURL: '/images/1.png',
    title: '그림1',
  },
  {
    iconURL: '/images/1.png',
    title: '그림1',
  },
  {
    iconURL: '/images/1.png',
    title: '그림1',
  },
  {
    iconURL: '/images/2.png',
    title: '그림1',
  },
  {
    iconURL: '/images/3.png',
    title: '그림1',
  },
  {
    iconURL: '/images/1.png',
    title: '그림1',
  },
  {
    iconURL: '/images/2.png',
    title: '그림1',
  },
  {
    iconURL: '/images/3.png',
    title: '그림1',
  },
];
export default function GalleryCard() {
  return (
    <div className="p-2">
      <div className="w-full flex flex-col bg-white p-2 rounded-xl">
        <div className="flex w-full justify-between">
          <div className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">hello &middot; card </h2>
            <p className="text-sm text-gray-700">
              <span className="bg-teal-300/20 rounded-sm">하하1 </span>하하하 하
            </p>
          </div>

          <span>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>

        {/* <div className="flex flex-wrap gap-8 content-center items-center justify-center"> */}
        <div className="mt-4 grid grid-cols-5  gap-8 content-center items-center justify-center">
          {galleryIcons.map((value: any, index: number) => (
            <Link href={'/gallery'} key={index}>
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center"
              >
                <Image
                  alt={value.title}
                  width={48}
                  height={48}
                  src={value.iconURL}
                />

                <p>{value.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
