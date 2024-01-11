import Layouts from "../components/layouts/Layout";
import {AddPostForm} from "../features/posts/AddPostForm";
import {PostsList} from "../features/posts/PostsList";

export default function HomePage() {
  return (
    <Layouts>
      <AddPostForm />
      <PostsList />
    </Layouts>
  );
}
