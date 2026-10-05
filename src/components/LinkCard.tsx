type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl bg-blue-100 px-4 py-4 text-center font-medium text-blue-900 transition-colors hover:bg-blue-200 active:bg-blue-300"
    >
      {title}
    </a>
  );
}
