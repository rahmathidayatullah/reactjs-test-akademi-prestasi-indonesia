import SkeletonTable from '../components/skeletons/SkeletonTable';
import Shimmer from '../components/skeletons/Shimmer';
import Notif from '../components/Notif';
import usePosts from '../hooks/usePosts';

const HomePage = ({ reload }) => {
  const [posts, loading, notif] = usePosts()
  if (loading) {
    return (
      <div>
        <SkeletonTable />
        <Shimmer />
      </div>
    )
  }
  return (
    <div>
      {notif.show && <Notif messageDialog={notif.message} />}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.length ? posts.map((post, index) => {
              return (
                <tr key={post.id}>
                  <th>{index + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              )
            })
              :
              <tr>
                <td colSpan={3}>
                  <h4 className='text-center my-5m '>Not FoundData</h4>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
