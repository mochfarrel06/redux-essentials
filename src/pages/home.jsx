import Layouts from "../components/layouts/Layout";
import {PostsList} from "../features/posts/PostsList";

export default function HomePage() {
  return (
    <Layouts>
      <PostsList />
    </Layouts>
  );
}
