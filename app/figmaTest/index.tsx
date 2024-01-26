 
import React  from "react";
const App = () => {
    
     

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div className="mx-auto max-w-md">
      <img src="/img/logo.svg" className="h-6" alt="Tailwind Play" />
      <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>An advanced online playground for Tailwind CSS, including support for things like:</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
                Customizing your
                <code className="text-sm font-bold text-gray-900">tailwind.config.js</code> file
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
                Extracting classes with
                <code className="text-sm font-bold text-gray-900">@apply</code>
              </p>
            </li>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">Code completion with instant preview</p>
            </li>
          </ul>
          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
        </div>
        <div className="pt-8 text-base font-semibold leading-7">
          <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
          <p>
            <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default App;



// import { response } from "express";
// import fetch from "isomorphic-unfetch";
// import Image from 'next/image';
// import { useState } from "react";

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';// 인증되지 않은 http 통신 인증 허용, 실서버에서 삭제할것!
// function Home(props) {
//     return (
//         <div>
//             <div>
//                 <div>
//                     <div>
//                         <h1>{props.title}</h1> <ul>
//                             {props.users.map((user) => (
//                                 <li key={user.id}>{user.id}  {user.name}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div>
//                         <h1>{props.title}</h1>
//                         <Image src="/testImages/testimage1.png" alt="프로필 이미지" width={300} height={300} />
//                     </div>


//                 </div>


//             </div>
//             <div >
//                 <Image src="/testImages/스크린샷 2023-03-29 오후 3.45.22.png" alt="프로필 이미지" width={300} height={300} />
//             </div>

//         </div>
//     );
// }






// Home.getInitialProps = async function () {

//     const [prompt, setPrompt] = useState("");
//     const [imageURL, setImage] = useState("");

//     // const createImg = async () => {
//     //     const response = await axios.post("http://localhost:8080/create", {
//     //       prompt,
//     //     });
//     //     setImage(response.data);
//     //   };

//     console.log('process.env.PUBLIC_IMAGE_URL    ' + process.env.PUBLIC_IMAGE_URL);


//     const data = await fetch("https://localhost:9443/users/findAll", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             prompt: prompt
//         }),
//     }).then((response) => console.log("test!  " + response));

//     console.log('data  : '+ data)
//     return {
//         title: "그림 목록",
//         users: data,
//     };
// };

// export default Home;


// // import { useState, useEffect } from "react"

// // function Home() {
// //     const [users, setUsers] = useState([]);
// //     useEffect(() => {
// //         fetch("http://localhost:9443/users/findAll")
// //             .then((res) => res.json())
// //             .then((data) => setUsers(data));
// //     }, []);

// //     return (

// //         <div>
// //             <h1>사용차 목록</h1>
// //             <ul>
// //                 {users.map((user) => (
// //                     <li key={user.id} > {user.name}</li>
// //                 ))}
// //             </ul>

// //         </div>
// //     )
// // }

// // export default Home;