import GalleryCard from '../card/GalleryCard';
import MainCard from '../card/MainCard';
const property = [
  {
    title: '갤러리',
    description: '블루캔버스에 오신것을',
    imageURL: '/images/1.png',
  },
  {
    title: '컬렉션',
    description: '환영합니다',
    imageURL: '/images/2.png',
  },
  {
    title: '디바이스12',
    description: 'thankyou',
    imageURL: '/images/3.png',
  },
];
export default function MainSection() {
  return (
    <section className="h-full flex flex-col ">
      <div className="flex">
        {property.map((value: any, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
      <GalleryCard />
    </section>
  );
}
