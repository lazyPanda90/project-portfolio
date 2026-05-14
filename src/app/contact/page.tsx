import Link from "next/link";

import { SectionHeader } from "@/components/section-header";

const contacts = [
  {
    label: "Email",
    value: "hkon.billingstad@gmail.com",
    href: "mailto:hkon.billingstad@gmail.com"
  },
  {
    label: "GitHub",
    value: "https://github.com/lazyPanda90",
    href: "https://github.com/lazyPanda90"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname"
  }
];

export default function ContactPage() {
  return (
    <section className="content-section">
      <SectionHeader
        eyebrow="Contact"
        title="Let us build something useful"
        description="The fastest way to reach me is email. I am open to project collaboration and developer roles."
      />
      <div className="contact-grid">
        {contacts.map((contact) => (
          <Link key={contact.label} href={contact.href} target="_blank" rel="noreferrer" className="contact-card">
            <p>{contact.label}</p>
            <h3>{contact.value}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
