import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  async function getAllPosts() {
    const res = await axios.get(`${BASE_URL}/posts`);
    return res;
    // const response = await fetch(`${BASE_URL}/posts`);

    // const responseJson = await response.json();

    // const { status, message } = responseJson;

    // if (status !== 'success') {
    //   throw new Error(message);
    // }

    // const {
    //   data: { users },
    // } = responseJson;

    // return users;
  }

  //   async function createThread(title, body, category) {
  //     const response = await fetchWithAuth(`${BASE_URL}/threads`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title,
  //         body,
  //         category,
  //       }),
  //     });

  //     const responseJson = await response.json();
  //     const { status, message } = responseJson;

  //     if (status !== 'success') {
  //       throw new Error(message);
  //     }

  //     const {
  //       data: { thread },
  //     } = responseJson;

  //     return thread;
  //   }

  return {
    getAllPosts,
    // createThread,
  };
})();

export default api;
