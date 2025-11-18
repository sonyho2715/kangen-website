export default function FDADisclaimer() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-2xl">⚠️</span>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-bold text-yellow-800 mb-2">
            FDA Disclaimer
          </h3>
          <p className="text-sm text-yellow-700 leading-relaxed">
            These statements have not been evaluated by the Food and Drug Administration.
            This product is not intended to diagnose, treat, cure, or prevent any disease.
            Kangen Water® is produced by medical device-certified ionizers and is intended
            for general wellness purposes. Individual results may vary. Consult your healthcare
            provider before making changes to your diet or health routine, especially if you
            have a medical condition or are taking medication.
          </p>
        </div>
      </div>
    </div>
  );
}
