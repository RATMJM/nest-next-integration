export default function MainSection() {
  return (
    <section className="h-full">
      <div className="flex flex-wrap">
        {[1, 2, 3].map((index: number) => (
          <div key={index}> Card</div>
        ))}
      </div>
      <div> Big Card</div>
      <div> Banner Caraousel</div>
      <div>icon menu horizon</div>
      <div>dnflehdsp QKfms 빠른배달</div>
    </section>
  );
}
