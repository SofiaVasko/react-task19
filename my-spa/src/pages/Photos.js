import { useEffect, useState } from "react";

const Photos = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const url = new Array(30).fill("https://picsum.photos/200/300");
    const controller = new AbortController();
    let requests = url.map((url) => fetch(url, { signal: controller.signal }));
    Promise.all(requests)
      .then((res) => res.map((res) => res.url))
      .then((res) => setState(res))
      .catch((error) => {
       console.error(error);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="Photos">
      {state.map((url, index) => (
        <img key={index} src={url} alt="random" />
      ))}
    </div>
  );
};

export default Photos;
