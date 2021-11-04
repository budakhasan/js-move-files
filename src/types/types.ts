export type File = {
  id: string;
  name: string;
};

export type List = {
  id: string;
  name: string;
  files: File[];
};
