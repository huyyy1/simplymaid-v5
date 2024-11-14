import Link from "next/link";

export function ContactCTA() {
  return (
    <div className="text-center mt-12">
      <p className="text-lg">
        Not sure if we serve your area?{" "}
        <Link href="/contact" className="text-[#7E57C2] hover:text-[#7E57C2]/80 font-medium">
          Contact us
        </Link>
      </p>
    </div>
  );
}