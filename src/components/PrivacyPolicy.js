import React from 'react';

const PrivacyPolicy = () => {
  const buildSection = ({ title, content }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-base leading-relaxed">{content}</p>
    </div>
  );

  const sections = [
    {
      title: 'Introduction',
      content: 'This Privacy Policy describes how Fuelytics ("we," "our," or "us") handles your information when you use our mobile application. We are committed to protecting your privacy and ensuring you understand how your data is handled.'
    },
    {
      title: 'Permissions We Request',
      content: `Our app requires the following Android permissions:

1. Internet Access (android.permission.INTERNET)
   • Used to fetch current fuel prices
   • Required for API communications

2. Camera Access (android.permission.CAMERA)
   • Used for scanning receipts
   • All processing is done locally on your device

You can manage these permissions through your device settings at any time.`
    },
    {
      title: 'Data Collection and Storage',
      content: `Local Storage:
• Refueling records
• Maintenance costs
• Vehicle information
• App settings

All data is stored locally on your device using secure storage methods. We do not collect or store any personal information on remote servers.`
    },
    {
      title: 'Internet Usage',
      content: `Our app uses internet connectivity for:

• Fetching current fuel prices from government APIs
• Checking for app updates

We do not track your location or send any personal data over the internet.`
    },
    {
      title: 'Camera Usage',
      content: `The camera permission is used exclusively for:

• Scanning fuel receipts using OCR (Optical Character Recognition)
• Processing is done locally using Tesseract OCR
• Images are not stored or transmitted
• You can deny or revoke camera access at any time`
    },
    {
      title: 'Data Processing',
      content: `Text Processing:
• Receipt text is processed locally on your device
• We use the PROCESS_TEXT intent for OCR functionality
• No text data is transmitted to external servers`
    },
    {
      title: 'App Configuration',
      content: `Our app uses:

• android:taskAffinity="": Ensures proper task management
• android:exported="true": Required for app launcher functionality
• android:launchMode="singleTop": Prevents multiple instances
• android:hardwareAccelerated="true": Improves app performance`
    },
    {
      title: 'Data Security',
      content: `We implement several security measures:

• Local data encryption
• Secure data storage using Hive
• No external data transmission except for fuel prices
• Regular security updates`
    },
    {
      title: 'Your Rights and Controls',
      content: `You have the right to:

• Control app permissions through device settings
• Export your data in CSV format
• Delete all data through the app
• Uninstall the app to remove all local data`
    },
    {
      title: "Children's Privacy",
      content: 'Our app does not knowingly collect or store any personal information from children under 13. All data is manually entered and stored locally.'
    },
    {
      title: 'Changes to Privacy Policy',
      content: 'We may update this Privacy Policy periodically. You will be notified of any significant changes through the app.'
    },
    {
      title: 'Contact Information',
      content: `If you have any questions about this Privacy Policy or our practices, please contact us at:

likweitan@gmail.com`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            {buildSection(section)}
          </div>
        ))}
        
        <div className="text-center text-sm text-gray-500 mt-8">
          Last updated: {new Date().toISOString().split('T')[0]}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;