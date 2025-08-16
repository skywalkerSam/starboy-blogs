// import Footer from "~/components/footer";
import Container from "../_components/container";
import { HeroPost } from "../_components/hero-post";
import type { HeroPostTypes } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "lib/api";

// ISR - 60min
export const revalidate = 3600;

export default async function Index() {
  const allPosts = await getAllPosts();

  const heroPost = allPosts[0] ?? ({} as HeroPostTypes);

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost?.title}
          coverImage={heroPost?.coverImage}
          date={heroPost?.date}
          author={heroPost?.author}
          slug={heroPost?.slug}
          excerpt={heroPost?.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
      {/* <Footer></Footer> */}
    </main>
  );
}
