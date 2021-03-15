export const RandomAvatars = () => {
  const userProfiles = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
  ];

  return userProfiles[Math.floor(Math.random() * userProfiles.length)];
};
