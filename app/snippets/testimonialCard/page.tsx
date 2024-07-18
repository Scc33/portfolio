import TestimonialCard from "../components/TestimonialCard";

export const metadata = {
    title: "Testimonial Card",
    description:
        "Card featuring a user testimonial, including a profile image, name, username, and the testimonial body."
};

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Testimonial Card
            </h1>
            <TestimonialCard />
        </section>
    );
}
