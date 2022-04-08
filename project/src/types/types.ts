export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type FilmsList = Film[];

export type Review = {
  comment: string;
  date: string;
  id?: string;
  rating: number;
  user: {
  id?: string;
  name: string;
  }
};

export type Reviews = Review[];

export type NewReview = {
  id: number;
  comment: string;
  rating: number;
};

export type FavoriteStatus = {
  id: number;
  status: number;
};
