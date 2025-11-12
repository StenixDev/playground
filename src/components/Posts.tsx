type PostsProps = {
  id?: number;
  title: string;
  body: string;
};

function Posts(props: PostsProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.body}</h2>
    </div>
  );
}
export default Posts;
