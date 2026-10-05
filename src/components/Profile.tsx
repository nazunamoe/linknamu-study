import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function Profile({ name, bio, imageSrc }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        unoptimized
        priority
        className="h-28 w-28 rounded-full border-2 border-foreground/10 object-cover sm:h-32 sm:w-32"
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-foreground/70">{bio}</p>
    </section>
  );
}
