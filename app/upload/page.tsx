export default function Upload() {
  async function posting(data: FormData) {
    // 'use server';
    // title: 'hi', year: 2002, genres:
    // {
    //     "title": "hi",
    //     "year": 2002,
    //     "genres": "fantys"
    // }
    // const title = data.get('title');
    console.log('hihi  : ' + data);
    const galleryItems = await (
      await fetch(`https://localhost:9443/movies`, {
        method: 'post',
        body: data,
      })
    ).json();

    console.log('title :>> ', galleryItems);
  }
  return (
    <form
      className="flex justify-center items-center w-full h-screen"
      action={'/api'}
    >
      <div className="border border-black rounded-md p-8">
        <h2 className="text-3xl font-bold">업로드</h2>
        <div>
          <label>title</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label htmlFor="">year</label>
          <input type="text" name="year"></input>
        </div>
        <div>
          <label htmlFor="">star</label>
          <input type="number" name="star"></input>
        </div>
        <div>
          <label htmlFor="">genres</label>
          <input type="text" name="genres"></input>
        </div>

        <button
          formAction="posting"
          className="bg-blue-500 px-2 pl-1 text-white text-xs rounded-sm"
        >
          submit
        </button>
      </div>
    </form>
  );
}
