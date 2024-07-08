import { Button } from "app/button/components/Button";
import { Check } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection = ({ isVisible }: HeroSectionProps) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-8 md:grid-cols-2 lg:gap-16">
        <div className="order-1 md:order-1">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">
              Premium abstract images
            </h1>
            {isVisible && (
              <ul className="grid gap-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary bg-white rounded-full p-2">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Minimum 5K image resolution</h4>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary bg-white rounded-full p-2 text-primary-foreground">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">
                      Various format variants available
                    </h4>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary bg-white rounded-full p-2 text-primary-foreground">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Retina display support</h4>
                  </div>
                </li>
              </ul>
            )}
            <div className="flex gap-3">
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
              <Button size="lg">See pricing</Button>
            </div>
          </div>
        </div>
        <div className="order-2 md:order-2">
          <Image
            src="/heroSection/prism.png"
            width={1000}
            height={600}
            alt="Hero Image"
            className="mx-auto w-full max-w-[600px] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
