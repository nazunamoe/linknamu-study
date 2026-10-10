type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-xl bg-blue-100 px-16 py-4 text-center font-medium text-blue-900 transition-colors hover:bg-blue-200 active:bg-blue-300"
    >
      {title}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-normal text-blue-900/60">
        {count.toLocaleString()}회
      </span>
    </a>
  );
}
