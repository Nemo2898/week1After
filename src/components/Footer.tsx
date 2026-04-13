export default function Footer() {
  return (
    <footer className="bg-[#A2D135] text-black p-8 mt-12 w-full flex flex-wrap justify-around items-start">
      
      {/* Contact */}
      <div className="min-w-[200px] mb-6">
        <h2 className="font-bold text-lg mb-2">Contact</h2>
        <p>Email: example@freshfood.com</p>
        <p>Phone: +123 456 789</p>
        <p>Address: Fresh Street 12</p>
      </div>

      {/* Social Media */}
      <div className="min-w-[200px] mb-6">
        <h2 className="font-bold text-lg mb-2">Social Media</h2>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>

      {/* Branding */}
      <div className="min-w-[200px] mb-6">
        <h2 className="font-bold text-lg mb-2">Branding</h2>
        <p>Fresh Food Factory</p>
        <p>Healthy Bowls Everyday</p>
        <p>© 2026 FRESSE</p>
      </div>

    </footer>
  )
}
