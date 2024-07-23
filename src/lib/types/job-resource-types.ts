export type ResourceData = {
  [key: string]: JobResource[];
};

export type JobResource = {
  [key: string]: string | undefined;
  name: string;
  url: string;
  description: string;
  owner?: string;
  submitted_by?: string;
  submitted_on?: string;
};
