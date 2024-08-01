"use client";

import { DialogFooter } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import zod from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitJobResourceZodSchema } from "@/lib/types/job-resource-types";
import { useState } from "react";
import { AddResourceFormAltState } from "../add-resource-form-alt-state";

interface AddResourceFormProps {
  categories: string[];
  handleFormSubmittion: (data: zod.infer<typeof FormSchema>) => Promise<void>;
}

const FormSchema = SubmitJobResourceZodSchema;

export const AddResourceFormDisplay = ({
  categories,
  handleFormSubmittion,
}: AddResourceFormProps) => {
  type SubmissionState = "not-submitted" | "submitting" | "submit-complete";

  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("not-submitted");

  const [submitError, setSubmitError] = useState(false);

  const form = useForm<zod.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      outline: "",
      url: "",
      description: "",
      owner: "",
      submitted_by: "",
    },
  });

  const onSubmit = async (data: zod.infer<typeof FormSchema>) => {
    try {
      setSubmissionState("submitting");
      await handleFormSubmittion(data);
      setSubmissionState("submit-complete");
    } catch (error) {
      setSubmitError(true);
      setSubmissionState("not-submitted");
    }
  };

  return (
    <>
      {submissionState === "not-submitted" && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {submitError && (
              <span className="text-red-600">
                Something went wrong with the submission. Please try again.
              </span>
            )}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black bg-white dark:text-black dark:bg-white border-slate-600"
                      placeholder="Name"
                      maxLength={30}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The name of the job search resource
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="outline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Outline</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black bg-white dark:text-black dark:bg-white border-slate-600"
                      placeholder="Outline"
                      maxLength={30}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A synopsis (short description) of the resource
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Url</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black bg-white dark:text-black dark:bg-white border-slate-600"
                      placeholder="Url"
                      maxLength={30}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A working url to the job search resource
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      className="text-black bg-white dark:text-black dark:bg-white border-slate-600 resize-none"
                      maxLength={400}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A description of the job search resource
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="owner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Owner</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black bg-white dark:text-black dark:bg-white border-slate-600"
                      placeholder="Owner"
                      maxLength={30}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>The owner of the resource</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="text-black bg-white dark:text-black dark:bg-white border-slate-600 capitalize w-[180px]">
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories?.map((category, key) => (
                          <SelectItem
                            key={key}
                            value={category}
                            className="text-black bg-white dark:text-black dark:bg-white border-slate-600 capitalize"
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="submitted_by"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Submitter Name</FormLabel>
                  <FormControl>
                    <Input
                      className="text-black bg-white dark:text-black dark:bg-white border-slate-600"
                      placeholder="Your Name"
                      maxLength={30}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                className="dark:bg-gray-600"
                variant="outline"
                type="submit"
              >
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      )}
      {submissionState === "submitting" && (
        <AddResourceFormAltState submitting />
      )}
      {submissionState === "submit-complete" && (
        <AddResourceFormAltState complete />
      )}
    </>
  );
};
