import type { Meta, StoryObj } from "@storybook/react";
import PortfolioCard from "../../app/snippets/components/PortfolioCard";

const meta = {
    title: "Portfolio/Portfolio Card",
    component: PortfolioCard,
    parameters: {},
    tags: ["dev"]
} satisfies Meta<typeof PortfolioCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Portfolio: Story = {};
