const Posts = () => {
  return <div>This is Post Page </div>;
};
export default Posts;

export async function getServerSideProps(context) {
  // const token = localStorage.getItem('token');
  console.log('This is server side code token =>', context.req.headers.cookie);
  return {
    props: {},
  };
}
