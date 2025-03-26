export const metadata = {
    title: "BuddyCSS - Privacy Policy",
    description: "Privacy policy for the BuddyCSS mobile application"
};

export default function PrivacyPage() {
    return (
        <div className="py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">
                    Privacy Policy for BuddyCSS
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Last updated: March 26, 2025
                </p>

                <div className="prose dark:prose-invert max-w-none">
                    <p>
                        At BuddyCSS, we value your privacy and are committed to
                        protecting your personal information. This Privacy
                        Policy explains how we collect, use, and safeguard your
                        data when you use our mobile application.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Information We Collect
                    </h2>

                    <h3 className="text-xl font-medium mt-4 mb-2">
                        Personal Information
                    </h3>
                    <p>
                        When you create an account on BuddyCSS, we may collect
                        the following information:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Email address (for account creation and recovery)
                        </li>
                        <li>Username (for display within the app)</li>
                        <li>Password (stored in encrypted format)</li>
                    </ul>

                    <h3 className="text-xl font-medium mt-4 mb-2">
                        Usage Data
                    </h3>
                    <p>
                        We collect information about how you interact with our
                        app:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Progress through lessons and challenges</li>
                        <li>Time spent on various activities</li>
                        <li>Achievement completion</li>
                        <li>Error logs and app performance data</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        How We Use Your Information
                    </h2>
                    <p>
                        We use the collected information for the following
                        purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>To provide and maintain our service</li>
                        <li>To save your learning progress</li>
                        <li>To personalize your learning experience</li>
                        <li>
                            To improve our app based on how users interact with
                            it
                        </li>
                        <li>
                            To communicate with you about app updates or changes
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Data Storage and Security
                    </h2>
                    <p>
                        All personal information is stored on secure servers
                        with appropriate safeguards. We implement
                        industry-standard security measures to protect against
                        unauthorized access, alteration, disclosure, or
                        destruction of your data.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Data Sharing
                    </h2>
                    <p>
                        We do not sell, trade, or otherwise transfer your
                        personal information to outside parties. This does not
                        include trusted third parties who assist us in operating
                        our app, conducting our business, or servicing you, so
                        long as those parties agree to keep this information
                        confidential.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Your Rights
                    </h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Access the personal information we hold about you
                        </li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your information</li>
                        <li>Request restriction of processing</li>
                        <li>Request transfer of your information</li>
                        <li>Withdraw consent at any time</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Children's Privacy
                    </h2>
                    <p>
                        Our app is designed for users of all ages, including
                        children. We are committed to complying with the
                        Children's Online Privacy Protection Act (COPPA). We do
                        not knowingly collect personal information from children
                        under 13 without verifiable parental consent.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Changes to This Privacy Policy
                    </h2>
                    <p>
                        We may update our Privacy Policy from time to time. We
                        will notify you of any changes by posting the new
                        Privacy Policy on this page and updating the "Last
                        updated" date at the top.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Contact Us
                    </h2>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                    </p>
                    <p className="mt-2">
                        <strong>Email:</strong> privacy@buddycss.app
                    </p>
                </div>
            </div>
        </div>
    );
}
