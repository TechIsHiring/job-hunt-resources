import zod from "zod";

export type ResourceData = {
  [key: string]: JobResource[];
};

export type JobResource = {
  [key: string]: string | undefined;
  name: string;
  outline: string;
  link: string;
  description: string;
  owner?: string;
  submitted_by?: string;
  submitted_on?: string;
};

export const SubmitJobResourceZodSchema = zod.object({
  name: zod
    .string()
    .min(2, "Please add more than two characters.")
    .max(150, "Please keep your entry to less than 150 characters."),
  outline: zod
    .string()
    .min(2, "Please add more than two characters.")
    .max(150, "Please keep your entry to less than 150 characters."),
  link: zod.string().url({ message: "Please enter a valid url." }),
  description: zod
    .string()
    .min(30, "Please add more than 30 characters.")
    .max(400, "Please keep your entry to less than 400 characters."),
  owner: zod
    .string()
    .min(2, "Please add more than two characters.")
    .max(30, "Please keep your entry to less than 30 characters."),
  submitted_by: zod
    .string()
    .min(2, "Please add more than two characters.")
    .max(30, "Please keep your entry to less than 30 characters."),
  category: zod.string(),
});

export type SubmitJobResource = zod.infer<typeof SubmitJobResourceZodSchema>;
