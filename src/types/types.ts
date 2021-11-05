export type File = {
  [key: string]: unknown;
  id: string;
  name: string;
};

export type List = File & {
  files: File[];
};
