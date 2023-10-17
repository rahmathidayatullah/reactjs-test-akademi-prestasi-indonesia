import { useEffect, useState, useContext } from 'react';
import api from '../utils/api';
import { Context } from '../context/LocalContext';

function usePosts() {
  const { reload } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [notif, setNotif] = useState({
    message: '',
    show: false,
  });

  const clearNotif = () => {
    setNotif({
      message: '',
      show: false,
    });
  };

  const messageNotif = (message) => {
    setNotif({
      message,
      show: true,
    });
  };

  const handleReload = () => {};

  async function fetchPosts() {
    setLoading(true);
    try {
      const { data } = await api.getAllPosts();
      messageNotif('Success fetch data');
      setPosts(data);
    } catch (error) {
      messageNotif('Fail fetch data');
    } finally {
      setLoading(false);
      //  kenapa diberikan settimeout agar skeleton loading terlihat
      setTimeout(() => {
        clearNotif();
      }, 1000);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [reload]);

  return [posts, loading, notif, handleReload];
}

export default usePosts;
