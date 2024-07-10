'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface Metric {
    metric: string;
    value: number;
}


const StatsSection: React.FC = () => {
    const [metrics, setMetrics] = useState<Metric[]>([]);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const response = await fetch(
                    "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics?latest=true"
                );
                const data = await response.json();
                setMetrics(data.data);
            } catch (error) {
                console.error("Error fetching metrics:", error);
            }
        };

        fetchMetrics();
    }, []);

    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <section className="bg-white p-4 md:p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-indigo-700 text-sm md:text-base font-medium mb-2 md:mb-4">
                    Statistics
                </h2>
                <h1 className="text-neutral-900 text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
                    More than premium abstract imagery
                </h1>
                <p className="text-neutral-600 text-base md:text-lg mb-8 md:mb-12">
                    Our platform is more than just as a service to us – it is a
                    catalyst for enriching lives through premium abstract
                    imagery.
                </p>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="flex md:w-1/2">
                        <Image
                            src="/statisticsSection/white-blocks.png"
                            alt="Abstract geometric shapes"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-neutral-900 text-xl md:text-2xl font-semibold mb-6">
                            Our mission, in numbers
                        </h3>
                        <div className="space-y-6">
                            {metrics.map((metric) => (
                                <div
                                    key={metric.metric}
                                    className="bg-neutral-50 p-6 rounded-lg"
                                >
                                    <p className="text-indigo-700 text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                                        {formatNumber(metric.value)}
                                    </p>
                                    <p className="text-neutral-600 text-base md:text-lg capitalize">
                                        {metric.metric.replace("_", " ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;