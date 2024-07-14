import type { Meta, StoryObj } from "@storybook/react";
import BlogCard from "app/snippets/components/BlogCard/BlogCard";

const meta = {
    title: "Portfolio/Blog Card",
    component: BlogCard,
    parameters: {},
    tags: ["dev"]
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blog: Story = {};
