import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | BAR 忍",
  description: "BAR 忍のプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-12 text-center">
            プライバシーポリシー
          </h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第1条 [個人情報の定義]</h2>
              <p>
                当店が取り扱う個人情報とは、個人情報保護法第2条第1項により定義された個人情報（生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、及び他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいう。）を意味するものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第2条 [個人情報の収集方法]</h2>
              <p>
                当店は、以下の方法で個人情報を収集します。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>会員登録フォームからの収集</li>
                <li>予約・問い合わせフォームからの収集</li>
                <li>公式LINEを通じた収集</li>
                <li>来店時の口頭による収集</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第3条 [個人情報の利用目的]</h2>
              <p>
                当店が収集した個人情報は、以下の目的で利用します。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>会員登録および会員管理</li>
                <li>予約・問い合わせへの対応</li>
                <li>当店のサービス提供および運営</li>
                <li>会員への連絡および情報提供</li>
                <li>当店の改善およびマーケティング活動</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第4条 [個人情報の第三者提供]</h2>
              <p>
                当店は、以下の場合を除き、個人情報を第三者に提供しません。
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第5条 [個人情報の安全管理]</h2>
              <p>
                当店は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。また、個人情報を取り扱う従業員等に対して、必要かつ適切な監督を行います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第6条 [個人情報の開示・訂正・削除等]</h2>
              <p>
                個人情報の開示・訂正・削除等を希望される場合は、当店までご連絡ください。ご本人であることを確認の上、対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第7条 [Cookie等の使用について]</h2>
              <p>
                当店のウェブサイトでは、サービスの改善および利便性向上のため、Cookieを使用する場合があります。Cookieはブラウザの設定により無効化することができますが、その場合一部の機能が利用できない可能性があります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第8条 [プライバシーポリシーの変更]</h2>
              <p>
                当店は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当店のウェブサイトに掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-white mb-4">第9条 [お問い合わせ]</h2>
              <p>
                本プライバシーポリシーに関するお問い合わせは、当店までご連絡ください。
              </p>
            </section>
          </div>

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
