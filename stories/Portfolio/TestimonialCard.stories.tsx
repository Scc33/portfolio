import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCard from "app/snippets/components/TestimonialCard/TestimonialCard";

const meta = {
    title: "Portfolio/Testimonial Card",
    component: TestimonialCard,
    parameters: {},
    tags: ["dev"]
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Testimonial: Story = {};
