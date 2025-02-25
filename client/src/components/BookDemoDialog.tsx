import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Course Options
const courses = [
  "Data Analytics",
  "Full Stack Development",
  "Advanced Excel with AI",
  "Digital Marketing",
  "Python",
  "Data Science",
];

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^(?:\+\d{1,3})?\d{9,11}$/, "Invalid phone number"),
  course: z.string().min(1, "Please select a course"),
});

interface BookDemoDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BookDemoDialog({
  isOpen,
  setIsOpen,
}: BookDemoDialogProps) {
  const [selectedCourse, setSelectedCourse] = useState(() => {
    return localStorage.getItem("selectedCourse") || "";
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      course: selectedCourse,
    },
  });

  function handleCourseChange(value: string) {
    setSelectedCourse(value);
    localStorage.setItem("selectedCourse", value);
    form.setValue("course", value);
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    setIsOpen(false); // Close modal on submit
  }

  console.log("isopen : ",setIsOpen);
  

  return (
    <div className="text-center">
      {/* Book Demo Modal */}
      <Dialog
        key={isOpen ? "open" : "closed"}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="absolute w-[100%] max-w-[400px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-8 -mt-56 ml-72 ">
          {/* Header */}
          <DialogHeader className="flex justify-between items-center">
            <DialogTitle className="text-lg font-semibold text-white">
              Book a Demo
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <X className="h-6 w-6 text-white cursor-pointer" />
            </Button>
          </DialogHeader>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="bg-transparent border-white/30 text-white placeholder-white/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        {...field}
                        className="bg-transparent border-white/30 text-white placeholder-white/50"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Course Dropdown */}
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Course</FormLabel>
                    <Select
                      onValueChange={handleCourseChange}
                      defaultValue={selectedCourse}
                    >
                      <SelectTrigger className="bg-transparent border-white/30 text-white">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/80 border-white/30 text-white">
                        {courses.map((course, index) => (
                          <SelectItem key={index} value={course}>
                            {course}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-300"
              > Submit
              </Button>
            </form>
          </Form>
        </div>
      </Dialog>
    </div>
  );
}
