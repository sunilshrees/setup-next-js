// components/NDISProviderSection.tsx
import { Check, ArrowRight } from "lucide-react";

export default function NDISProviderSection() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white py-24 px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
          <div className="h-full grid grid-cols-5 gap-8">
            {/* Text Content */}
            <div className="flex-1 bg-gray-50  rounded-[3rem] p-8 col-span-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
                Looking For{" "}
                <span className="font-bold text-green-800">NDIS</span> Providers
                In Sydney?
              </h2>
              <p className="text-gray-500 mb-2">
                There Are Many Variations Of Passages Of Available But Simply
                Free Text Available In The Market Sit Amed Majority
              </p>
              <p className="text-gray-500 mb-6">
                Alteration In Some Form, By Humuour Simply Free Text Available
                In The Market Sit Amed Majority
              </p>

              <div className="mb-6 space-y-3">
                <p className="flex items-start gap-2 text-gray-700 font-medium">
                  <Check className="text-green-500 w-5 h-5 mt-1" /> NDIS And
                  Bushfire And Emergency Support
                </p>
                <p className="flex items-start gap-2 text-gray-700 font-medium">
                  <Check className="text-green-500 w-5 h-5 mt-1" /> Compliance
                  And Enforcement Actions
                </p>
                <p className="flex items-start gap-2 text-gray-700 font-medium">
                  <Check className="text-green-500 w-5 h-5 mt-1" /> Becoming A
                  Registered Provider Today
                </p>
              </div>

              {/* <button className="inline-flex items-center bg-white border-2 border-orange-400 text-orange-500 rounded-full px-6 py-2 hover:bg-orange-50 transition">
                Need NDIS Care <ArrowRight className="ml-2 w-4 h-4" />
              </button> */}
            </div>

            {/* Stats Card */}
            <div className="rounded-[3rem] border-2 border-green-300 px-16 py-8 min-w-[160px] text-center shadow-sm h-full">
              <div className="space-y-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800">10+</div>
                  <div className="text-sm text-gray-600">Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">8+</div>
                  <div className="text-sm text-gray-600">Homes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">5+</div>
                  <div className="text-sm text-gray-600">Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
