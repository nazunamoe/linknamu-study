import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

// TODO: 보여주기용 더미 데이터. 나중에 실제 내용으로 교체
const profile = {
  name: "나즈나모에",
  bio: "세계 최강 머시기",
  imageSrc: "/profile-placeholder.svg",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-4 py-12">
      <Profile {...profile} />
      <LinkList links={links} />
    </main>
  );
}
