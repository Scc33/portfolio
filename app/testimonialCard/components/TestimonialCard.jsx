import Image from 'next/image';

const TestimonialCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <Image
          src="/testimonialCard/profile-thumbnail.png"
          alt="Sarah Dole"
          width={48}
          height={48}
          className="rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">Sarah Dole</h3>
          <p className="text-sm text-neutral-500">@sarahdole</p>
        </div>
      </div>
      <p className="text-base text-neutral-700">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </p>
    </div>
  );
};

export default TestimonialCard;