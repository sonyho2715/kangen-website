import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Blessed & Beautiful Kangen Water',
  description: 'Terms of Service for Blessed & Beautiful Kangen Water LLC',
};

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                Welcome to Blessed & Beautiful Kangen Water LLC. By accessing or using our website, products, or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="leading-relaxed mb-4">
                Blessed & Beautiful Kangen Water LLC provides:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Information about Kangen Water ionization systems</li>
                <li>Product demonstrations and consultations</li>
                <li>Sales of Enagic Kangen Water products</li>
                <li>Customer support and education</li>
                <li>Business opportunity information</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Independent Distributor Status</h2>
              <p className="leading-relaxed">
                Blessed & Beautiful Kangen Water LLC is an independent distributor of Enagic products. We are not directly affiliated with or employed by Enagic USA, Inc. All Enagic product sales are subject to Enagic's terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Product Information and Health Claims</h2>
              <p className="leading-relaxed mb-4">
                <strong>Important Notice:</strong> While we provide information about the potential benefits of Kangen Water, please note:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Statements regarding health benefits have not been evaluated by the FDA</li>
                <li>Kangen Water products are not intended to diagnose, treat, cure, or prevent any disease</li>
                <li>Individual results may vary</li>
                <li>Consult with a healthcare professional before making health-related decisions</li>
                <li>Product information is provided for educational purposes only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pricing and Payment</h2>
              <p className="leading-relaxed mb-4">
                All prices are subject to change without notice. Payment terms:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prices are in USD unless otherwise stated</li>
                <li>Payment must be received before product delivery</li>
                <li>We accept various payment methods as communicated during purchase</li>
                <li>Financing options may be available through Enagic</li>
                <li>All sales are final unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Returns and Refunds</h2>
              <p className="leading-relaxed">
                Returns and refunds for Kangen Water products are subject to Enagic's return policy. Please contact us within 30 days of purchase to discuss return options. Certain conditions and restocking fees may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Product Warranty</h2>
              <p className="leading-relaxed">
                All Kangen Water machines come with a manufacturer's warranty provided by Enagic. Warranty terms vary by product model. Please refer to your product documentation or contact us for specific warranty information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. User Conduct</h2>
              <p className="leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our website for any unlawful purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful code or malware</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of Blessed & Beautiful Kangen Water LLC, Enagic, or their respective licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these websites. Access to third-party sites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Blessed & Beautiful Kangen Water LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, loss of data, or business interruption, arising from your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Disclaimer of Warranties</h2>
              <p className="leading-relaxed">
                Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless Blessed & Beautiful Kangen Water LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of Hawaii, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Honolulu, Hawaii.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-medium text-gray-900">Blessed & Beautiful Kangen Water LLC</p>
                <p className="text-gray-700 mt-2">Lee Meadows</p>
                <p className="text-gray-700">3457 Waialae Ave, Ste 201</p>
                <p className="text-gray-700">Honolulu, HI 96816</p>
                <p className="text-gray-700 mt-2">Phone: (808) 501-9878</p>
                <p className="text-gray-700">Email: info@blessedandbeautifulkangen.com</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-sm text-gray-600">
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
