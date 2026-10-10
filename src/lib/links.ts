// TODO: 보여주기용 더미 데이터. 나중에 실제 내용으로 교체
// id는 클릭 수를 저장하는 키이므로 한 번 정하면 바꾸지 않는다.
export const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "x", title: "X", url: "https://x.com" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com" },
];

export type Link = (typeof links)[number];

export const linkIds = new Set(links.map((link) => link.id));
