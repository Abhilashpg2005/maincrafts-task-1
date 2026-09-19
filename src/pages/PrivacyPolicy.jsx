import LegalLayout from '../components/LegalLayout'
import { siteInfo } from '../data/content'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink">1. Overview</h2>
        <p className="mt-2">
          This Privacy Policy explains how {siteInfo.name} ("we", "us", or
          "our") handles information in connection with this demonstration
          website, built as part of the MainCrafts Full Stack Web
          Development Internship — Task 3.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">2. Information We Collect</h2>
        <p className="mt-2">
          The contact form on this site is a front-end demonstration only.
          It validates your input locally in your browser and, instead of
          sending it to a server, saves it in your browser&apos;s{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 text-xs">localStorage</code> so it can be
          shown back to you on the{' '}
          <a href="#/submissions" className="font-medium text-skyline-600">
            Submissions
          </a>{' '}
          page. This data never leaves your device — it is not transmitted
          to a server, database, or third party, and no account
          information, payment details, or tracking cookies are collected
          by this project.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">3. How We Would Use Information</h2>
        <p className="mt-2">
          In a production version of this site, information submitted
          through the contact form would be sent to a real backend and used
          solely to respond to your inquiry and to evaluate potential
          projects or opportunities — it would never be sold or shared with
          unrelated third parties.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">4. Cookies &amp; Local Storage</h2>
        <p className="mt-2">
          This project does not set analytics, advertising, or tracking
          cookies. The only browser storage it uses is the{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 text-xs">localStorage</code> entry described
          above, which you can clear at any time from the Submissions page
          or your browser&apos;s settings. Any future production deployment
          would disclose specific cookie usage here before it was enabled.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">5. Your Rights</h2>
        <p className="mt-2">
          You may request details about, or removal of, any information you
          send us directly by email at any time. We will respond to
          reasonable requests promptly.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">6. Changes to This Policy</h2>
        <p className="mt-2">
          We may update this policy as the project evolves. Material
          changes will be reflected on this page with an updated "Last
          updated" date.
        </p>
      </div>
    </LegalLayout>
  )
}
