import LegalLayout from '../components/LegalLayout'
import { siteInfo } from '../data/content'

export default function Terms() {
  return (
    <LegalLayout title="Terms &amp; Conditions" updated="August 2026">
      <div>
        <h2 className="font-display text-lg font-semibold text-ink">1. Acceptance of Terms</h2>
        <p className="mt-2">
          By accessing this website, you agree to these Terms &amp;
          Conditions. This site is a portfolio project created for the
          MainCrafts Full Stack Web Development Internship — Task 3, and is
          provided for demonstration purposes.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">2. Use of This Site</h2>
        <p className="mt-2">
          You may browse this site and its content for personal,
          non-commercial, informational purposes. You agree not to misuse
          the site, attempt to disrupt its functionality, or use it in any
          unlawful way.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">3. Intellectual Property</h2>
        <p className="mt-2">
          The design, layout, and original content of this site belong to
          {` ${siteInfo.name}`} and its creator. You may not reproduce or
          redistribute substantial portions of this project without
          permission, outside of fair use for educational review.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">4. No Warranty</h2>
        <p className="mt-2">
          This site is provided "as is" as a learning exercise, without
          warranties of any kind, express or implied, including fitness for
          a particular purpose or uninterrupted availability.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">5. Limitation of Liability</h2>
        <p className="mt-2">
          {siteInfo.name} and its creator are not liable for any damages
          arising from the use of, or inability to use, this demonstration
          website.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">6. Changes to These Terms</h2>
        <p className="mt-2">
          These terms may be revised as the project changes. Continued use
          of the site after updates constitutes acceptance of the revised
          terms.
        </p>
      </div>

      <div>
        <h2 className="font-display text-lg font-semibold text-ink">7. Contact</h2>
        <p className="mt-2">
          Questions about these terms can be sent to {siteInfo.email}.
        </p>
      </div>
    </LegalLayout>
  )
}
