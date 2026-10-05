import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// TODO: 보여주기용 더미 데이터. 나중에 실제 내용으로 교체
const profile = {
  name: "나즈나모에",
  bio: "세계 최강 머시기",
  imageSrc: "/profile-placeholder.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "X", url: "https://x.com" },
  { title: "YouTube", url: "https://youtube.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-4 py-12">
      <Profile {...profile} />
      <ul className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
