interface Api {
  [key: string]: unknown;
}

export type File = Api & {
  id: string;
  name: string;
};

export type List = Api & {
  id: string;
  name: string;
  files: File[];
};
