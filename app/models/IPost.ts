export type IImage = {
  fields: {
    title: string;
    description: string;
    file: {
      fileName: string;
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
};

export type IPost = {
  map(
    arg0: (post: IPost) => import("react").JSX.Element
  ): import("react").ReactNode;
  fields: any;
  sys: any;
  image: IImage;
  date: number;
  title: string;
  abstract: string;
  maintext: string;
  metaText: string;
  metaDescription: string;
  author2: string;
};
