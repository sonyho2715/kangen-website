import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Disclaimer - Blessed & Beautiful Kangen Water',
  description: 'Important disclaimer and health information for Blessed & Beautiful Kangen Water LLC',
};

export default function Disclaimer() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-yellow-800 font-medium">
              <strong>IMPORTANT:</strong> Please read this disclaimer carefully before using our website or services.
            </p>
          </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Medical and Health Disclaimer</h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                <p className="leading-relaxed text-red-900 font-medium mb-4">
                  The information provided on this website is for educational and informational purposes only and is not intended as medical advice.
                </p>
                <ul className="list-disc list-inside space-y-2 text-red-900">
                  <li>Statements about Kangen Water and its benefits have not been evaluated by the U.S. Food and Drug Administration (FDA)</li>
                  <li>Kangen Water products are not intended to diagnose, treat, cure, or prevent any disease</li>
                  <li>Always consult with a qualified healthcare professional before making any health-related decisions</li>
                  <li>Do not disregard professional medical advice or delay seeking it because of information on this website</li>
                  <li>Individual results may vary and are not guaranteed</li>
                </ul>
              </div>
              <p className="leading-relaxed">
                While many users report positive experiences with Kangen Water, these testimonials represent individual experiences and may not be typical results. Your results may differ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Not a Substitute for Medical Care</h2>
              <p className="leading-relaxed">
                Kangen Water is not a replacement for proper medical care, medication, or treatment. If you have a medical condition or are taking medications, consult your healthcare provider before using Kangen Water. Do not stop taking prescribed medications without consulting your doctor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Product Information</h2>
              <p className="leading-relaxed mb-4">
                We strive to provide accurate and up-to-date information about Kangen Water products. However:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Product specifications, features, and prices are subject to change without notice</li>
                <li>Product images may not exactly represent the actual product</li>
                <li>We make no warranties regarding the accuracy or completeness of product information</li>
                <li>Technical specifications should be verified with Enagic directly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Independent Distributor Status</h2>
              <p className="leading-relaxed">
                Blessed & Beautiful Kangen Water LLC (Lee Meadows) is an independent distributor of Enagic products. We are not employees of Enagic USA, Inc. All product warranties, support, and guarantees are provided by Enagic, not by Blessed & Beautiful Kangen Water LLC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Business Opportunity Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                If you are considering the Kangen Water business opportunity:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Income results vary and are not guaranteed</li>
                <li>Success requires dedication, effort, and time</li>
                <li>Past performance does not guarantee future results</li>
                <li>Individual results depend on many factors including effort, skills, and market conditions</li>
                <li>This is not a get-rich-quick opportunity</li>
                <li>Carefully review Enagic's compensation plan and policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Testimonials Disclaimer</h2>
              <p className="leading-relaxed">
                Testimonials on this website represent individual experiences and opinions. They are not typical results and should not be considered as guarantees of similar outcomes. Results may vary based on individual circumstances, commitment, and various other factors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Water Quality Notice</h2>
              <p className="leading-relaxed">
                The effectiveness of Kangen Water machines depends on the quality of your source water. Some water sources may require pre-filtration or additional treatment. Water quality testing may be recommended. Consult with us about your specific water conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Website Content Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The information on this website is provided "as is" without warranties:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We make no guarantees about the accuracy, completeness, or timeliness of content</li>
                <li>Information may contain technical inaccuracies or typographical errors</li>
                <li>Content is subject to change without notice</li>
                <li>We are not responsible for content on linked third-party websites</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. No Professional Relationship</h2>
              <p className="leading-relaxed">
                Visiting this website or contacting us does not create a professional-client relationship. Any information exchanged is for general informational purposes only and should not be relied upon as professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Liability Limitation</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, Blessed & Beautiful Kangen Water LLC shall not be liable for any damages arising from the use of this website or Kangen Water products, including but not limited to direct, indirect, incidental, punitive, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Allergies and Sensitivities</h2>
              <p className="leading-relaxed">
                If you have any allergies, sensitivities, or medical conditions that might be affected by changes in water pH or mineral content, consult your healthcare provider before using Kangen Water.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Proper Use and Maintenance</h2>
              <p className="leading-relaxed">
                Kangen Water machines must be used and maintained according to manufacturer instructions. Improper use or maintenance may affect water quality and machine performance. We are not liable for issues arising from improper use or maintenance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Territorial Rights</h2>
              <p className="leading-relaxed">
                This website is intended for residents of Hawaii and the United States. Some products or services may not be available in all areas. Compliance with local laws and regulations is your responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to This Disclaimer</h2>
              <p className="leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting. Your continued use of our website constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Questions and Concerns</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about this disclaimer or our products, please contact us:
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
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">Acknowledgment</p>
                <p className="text-sm text-gray-700">
                  By using this website and our services, you acknowledge that you have read, understood, and agree to this disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of our website and services immediately.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
