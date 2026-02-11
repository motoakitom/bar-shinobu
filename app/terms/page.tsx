import { Metadata } from "next";
import TermsContent from "@/app/components/TermsContent";

export const metadata: Metadata = {
  title: "利用規約 | BAR 忍",
  description: "BAR 忍の利用規約",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
            利用規約
          </h1>
          
          <TermsContent />

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              最終更新日: {new Date().toLocaleDateString('ja-JP')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
