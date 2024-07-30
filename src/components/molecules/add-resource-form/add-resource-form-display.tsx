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

interface AddResourceFormProps {
  categories: string[];
  handleFormSubmittion: (data: zod.infer<typeof FormSchema>) => Promise<void>;
}

const FormSchema = SubmitJobResourceZodSchema;

export const AddResourceFormDisplay = ({
  categories,
  handleFormSubmittion,
}: AddResourceFormProps) => {
  type SubmissionState =
    | "not-submitted"
    | "submitting"
    | "submit-complete"
    | "submit-error";

  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("not-submitted");

  const form = useForm<zod.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
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
      setSubmissionState("submit-error");
    }
  };

  return (
    <>
      {submissionState === "not-submitted" ||
        (submissionState === "submit-error" && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {submissionState === "submit-error" && (
                <div>Something went wrong. Please submit again.</div>
              )}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="text-black"
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
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Url</FormLabel>
                    <FormControl>
                      <Input
                        className="text-black"
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
                        className="text-black resize-none"
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
                        className="text-black"
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
                        <SelectTrigger className="text-black capitalize w-[180px]">
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.map((category, key) => (
                            <SelectItem
                              key={key}
                              value={category}
                              className="text-black capitalize"
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
                        className="text-black"
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
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        ))}
      {submissionState === "submitting" && <div>Submitting...</div>}
      {submissionState === "submit-complete" && <div>Submittion Copmlete!</div>}
    </>
  );
};
