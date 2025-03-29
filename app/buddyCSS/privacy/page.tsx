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
                    <p className="text-lg">
                        At BuddyCSS, we take privacy seriously. Our approach is
                        simple:{" "}
                        <strong>we don't collect any data at all.</strong>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        No Data Collection
                    </h2>
                    <p>
                        BuddyCSS does not collect, store, or process any
                        personal information. We do not use:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Analytics tools</li>
                        <li>User accounts</li>
                        <li>Tracking technologies</li>
                        <li>Cookies</li>
                        <li>Third-party services that collect data</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        Local Storage Only
                    </h2>
                    <p>
                        Any progress or settings in the app are stored locally
                        on your device only. This information never leaves your
                        device and is not accessible to us or any third parties.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">
                        App Store Information
                    </h2>
                    <p>
                        When you download BuddyCSS from the App Store, Apple may
                        collect certain information according to their privacy
                        policy. This is standard for any app and is handled
                        entirely by Apple, not by us.
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
                        <strong>Email:</strong> massive.fume_6r@icloud.com
                    </p>
                </div>
            </div>
        </div>
    );
}
