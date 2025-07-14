"use client";

import { useActionState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import * as z from "zod/v4";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { jobSchema } from "@/lib/types";
import { addJob } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTabs } from "@/lib/context/tabs-context";

const AddJobForm = () => {
  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      jobTitle: "",
      jobCategory: "Technology",
      jobDescription: "",
      jobStatus: "Applied",
      companyName: "",
    },
  });

  const tabs = useTabs();
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof jobSchema>) {
    form.reset();
    const result = await addJob(values);
    if (result.success) {
      toast.success(result.message || "Job added successfully!");
      tabs?.handleTabChange("jobs");
    } else {
      toast.error(result.message || "Failed to add job");
    }
    router.refresh();
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add New Job Application</CardTitle>
          <CardDescription>
            Enter the details of your new job application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {/* Job Title */}
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
                      <FormControl>
                        <Input
                          id="jobTitle"
                          placeholder="e.g., Senior Frontend Developer"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Job Category */}
                <FormField
                  control={form.control}
                  name="jobCategory"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="jobCategory">Category</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Technology">
                              Technology
                            </SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                            <SelectItem value="Sales">Sales</SelectItem>
                            <SelectItem value="Design">Design</SelectItem>
                            <SelectItem value="Finance">Finance</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel htmlFor="jobDescription">
                      Job Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        id="jobDescription"
                        placeholder="Brief description of the role and company..."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <FormField
                  name="jobStatus"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="job-status">Status</FormLabel>
                      <FormControl>
                        <Select
                          {...field}
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue
                              defaultValue="Applied"
                              placeholder="Select status"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Applied">Applied</SelectItem>
                            <SelectItem value="Interview">Interview</SelectItem>
                            <SelectItem value="Offer">Offer</SelectItem>
                            <SelectItem value="Rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="companyName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel htmlFor="companyName">Company Name</FormLabel>
                      <FormControl>
                        <Input
                          id="companyName"
                          placeholder="e.g., Google"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Add Job
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default AddJobForm;
