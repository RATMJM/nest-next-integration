async function getGalleryDetail(year: number) {
  const galleryDetail = await (
    await fetch(`https://localhost:9443/users/findOne/`)
  ).json();
  console.log(JSON.stringify(galleryDetail[0].year) + ' ???');
  return galleryDetail[0].year;
}
export default function GalleryDetail({
  params,
}: {
  params: { year: number };
}) {
  const year = getGalleryDetail(params.year);
  console.log(JSON.stringify(year) + '  최종 yeAR');
  return <div>{params.year}sdfg</div>;
}
