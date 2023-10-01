export interface Item {
  id: number;
  title: string;
  text: string;
  image: string;
}

export const items: Item[] = [
  {
    id: 1,
    title: "Brazil",
    text: "Item 1",
    image: "src/assets/images/brazil.jpg",
  },
  {
    id: 2,
    title: "Dubai",
    text: "Item 2",
    image: "src/assets/images/dubai.jpg",
  },
  {
    id: 3,
    title: "London",
    text: "Item 3",
    image: "src/assets/images/london.jpg",
  },
  {
    id: 4,
    title: "New York",
    text: "Item 4 ",
    image: "src/assets/images/new-york.jpg",
  },
];
