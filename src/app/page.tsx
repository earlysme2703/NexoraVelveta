import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-20 w-full p-6 flex flex-col md:flex-row justify-between items-center bg-transparent">
        <div className="text-2xl font-bold tracking-widest text-[#6A1B9A] mb-4 md:mb-0">NEXORAVELVETA</div>
        <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-widest flex-wrap justify-center">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#contact" className="hover:text-primary transition-colors">Kontak</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen w-full flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-32 md:pt-24 pb-12 bg-[#F8F5FC]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start z-10 text-center md:text-left">
          <h1 className="font-script text-[2rem] md:text-[5rem] leading-none text-[#9575CD] opacity-100 transform md:-mb-2">
            Taste the Purple
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#4A148C] md:mt-0 max-w-lg leading-tight">
            FEEL THE VIBE
          </h2>
          <p className="mt-6 max-w-md text-gray-600 text-sm md:text-base leading-relaxed p-2 md:p-0">
            Nikmati pengalaman rasa yang tak terlupakan. Kelembutan ubi ungu pilihan berpadu dengan manisnya kasih sayang dalam setiap gigitan.
          </p>
          <a href="#menu" className="mt-8 rounded-full bg-[#4A148C] px-8 py-3 text-sm font-bold text-white uppercase tracking-wider shadow-lg hover:bg-[#000000] transition-colors inline-block">
            Lihat Menu Kami
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-12 md:mt-0">
          {/* Decorative Circle/Shape behind */}
          <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-[#6A1B9A] rounded-full opacity-10 blur-3xl -z-10"></div>
          {/* Main Dish Image */}
           <div className="relative w-[280px] h-[280px] md:w-[500px] md:h-[500px] flex items-center justify-center">
              <div className="w-full h-full rounded-full flex items-center justify-center shadow-2xl relative z-10 overflow-hidden border-4 md:border-8 border-white">
                  <Image 
                    src="/images/onemain.png"
                    alt="Mangkuk Manis Lezat"
                    fill
                    className="object-cover"
                  />
              </div>
              {/* Floating elements - Hidden on mobile to reduce clutter */}
              <div className="hidden md:block absolute top-10 -right-4 w-12 h-12 animate-bounce">
                <Image src="/images/iconyam.png" alt="Ubi Ungu" fill className="object-contain" />
              </div>
              <div className="hidden md:block absolute bottom-10 -left-4 w-12 h-12 animate-pulse">
                <Image src="/images/iconcheese.png" alt="Keju" fill className="object-contain" />
              </div>
           </div>
        </div>
        
        {/* Floating Leaves/Decorations */}
        <div className="hidden md:block absolute top-1/4 left-10 w-8 h-8 opacity-60 rotate-45">
            <Image src="/images/iconcheese.png" alt="Keju" fill className="object-contain" />
        </div>
        <div className="hidden md:block absolute bottom-1/4 right-10 w-8 h-8 opacity-60 -rotate-12">
            <Image src="/images/iconyam.png" alt="Ubi Ungu" fill className="object-contain" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full py-16 md:py-24 bg-white flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 px-6 md:px-20 overflow-hidden">
         {/* Background Yellow Circle Decor */}
         <div className="absolute top-1/2 left-1/2 md:left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#FFF9C4] rounded-full -translate-y-1/2 -translate-x-1/2 -z-10 opacity-50"></div>

         {/* Left Image */}
         <div className="w-full md:w-1/2 flex justify-center relative order-1 md:order-1">
            <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center bg-gray-100 relative">
               <Image 
                  src="/images/two.png"
                  alt="Cupcake Elegan"
                  fill
                  className="object-none"
               />
            </div>
         </div>

         {/* Right Content */}
         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2">
            <span className="text-sm font-bold tracking-widest text-[#4A148C] uppercase mb-2">Tentang</span>
            <h2 className="font-script text-5xl md:text-8xl text-[#6A1B9A] mb-6">Nexora Velveta</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm px-4 md:px-0">
               Nexora Velveta menghadirkan inovasi kuliner berbahan dasar ubi ungu premium. Kami mengubah bahan tradisional menjadi sajian dessert mewah yang memanjakan lidah.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm px-4 md:px-0">
               Setiap kreasi dibuat dengan teliti, menonjolkan warna alami dan rasa manis otentik ubi ungu tanpa pemanis buatan yang berlebihan.
            </p>
            <a 
               href="https://instagram.com/nexoravelveta_" 
               target="_blank" 
               rel="noopener noreferrer"
               className="rounded-full bg-[#4A148C] px-8 py-3 text-sm font-bold text-white uppercase tracking-wider shadow-lg hover:bg-[#000000] transition-colors inline-flex items-center gap-2"
            >
               <span className="text-xl">📸</span>
               <span>Follow Instagram Kami</span>
            </a>
         </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="w-full bg-[#6A1B9A] py-16 md:py-24 text-white relative">
        <div className="text-center mb-12 md:mb-16 px-4">
           <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Menu Kami</h2>
           <p className="mt-4 text-white/70 max-w-lg mx-auto text-xs">
              Jelajahi pilihan profil manis kami yang telah dikurasi. Dari kue beludru hingga awan gula.
           </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-8 relative z-10">
           {/* Cards */}
           {[
             { title: "Purple Velvet Cheese", price: "Rp.10000", img: "/images/onemain.png", imgClass: "object-cover" },
             { title: "Spring rolls Velvet", price: "Rp.8000", img: "/images/two.png", imgClass: "object-contain p-4" },
             { title: "Violet Bites", price: "Rp.5000", img: "/images/three.png", imgClass: "object-cover" }
           ].map((item, idx) => (
             <div key={idx} className="flex flex-col items-center">
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/10 flex items-center justify-center mb-6 border-2 border-white/20 transition-transform hover:scale-105 hover:bg-white/20 overflow-hidden">
                    <Image 
                      src={item.img}
                      alt={item.title}
                      fill
                      className={item.imgClass}
                    />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-1">{item.title}</h3>
                <p className="text-lg font-script text-[#FFD54F]">hanya <span className="text-3xl font-bold text-white font-sans">{item.price}</span></p>
                <a 
                  href={`https://wa.me/6281313178454?text=Halo%20Admin%20Nexora%20Velveta%2C%20saya%20mau%20pesan%20${encodeURIComponent(item.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-white text-[#6A1B9A] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-[#F3E5F5] hover:shadow-lg transition-all cursor-pointer"
                >
                  Beli Sekarang
                </a>
             </div>
           ))}
        </div>
        
        {/* Navigation Arrows (Visual only) - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/2 left-8 md:left-20 text-white/30 text-4xl">←</div>
        <div className="hidden md:block absolute top-1/2 right-8 md:right-20 text-white/30 text-4xl">→</div>
      </section>
      
      {/* Special Packages Section */}
      <section id="packages" className="relative w-full py-20 md:py-32 bg-[#F8F5FC] flex flex-col items-center justify-center text-center px-4 md:px-20 overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1BEE7] rounded-full blur-3xl opacity-30translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFF9C4] rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>

         <span className="text-sm font-bold tracking-[0.2em] text-[#AB47BC] uppercase mb-4 relative z-10">Penawaran Eksklusif</span>
         <h2 className="font-script text-6xl md:text-7xl text-[#4A148C] mb-16 relative z-10">Momen Spesial</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl relative z-10">
            {/* Hampers Card */}
            <div className="group bg-white rounded-[2rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-purple-50 hover:-translate-y-2">
               <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-[6px] border-[#F3E5F5] shadow-inner group-hover:scale-105 transition-transform duration-500 relative">
                   <Image src="/images/hampers.png" alt="Hampers" fill className="object-cover" />
               </div>
               <h3 className="text-3xl font-bold text-[#6A1B9A] mb-4">Hampers</h3>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  Berikan hantaran spesial. Rangkaian manisan ubi ungu eksklusif yang dikemas cantik untuk berbagi kebahagiaan dengan orang tersayang.
               </p>
               <a 
                  href="https://wa.me/6281313178454?text=Halo%20Admin%20Nexora%20Velveta%2C%20saya%20tertarik%20pesan%20Paket%20Hampers%20Ubi%20Ungu"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="mt-auto px-10 py-3 rounded-full bg-[#6A1B9A] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#4A148C] hover:shadow-lg transition-all inline-block"
               >
                  Pesan Hampers
               </a>
            </div>

            {/* Birthday Card */}
            <div className="group bg-white rounded-[2rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-purple-50 hover:-translate-y-2">
               <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-[6px] border-[#FFF9C4] shadow-inner group-hover:scale-105 transition-transform duration-500 relative">
                   <Image src="/images/ulangtahun.png" alt="Ulang Tahun" fill className="object-cover" />
               </div>
               <h3 className="text-3xl font-bold text-[#6A1B9A] mb-4">Ulang Tahun</h3>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  Rayakan momen bahagiamu. Paket ulang tahun dengan kue tart ubi ungu dan dessert table estetik yang unik dan memukau.
               </p>
               <a 
                  href="https://wa.me/6281313178454?text=Halo%20Admin%20Nexora%20Velveta%2C%20saya%20mau%20tanya%20paket%20Ulang%20Tahun%20Ubi%20Ungu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-10 py-3 rounded-full bg-[#FFD54F] text-[#4A148C] font-bold text-sm uppercase tracking-wider hover:bg-[#FFCA28] hover:shadow-lg transition-all inline-block"
               >
                  Pesan Paket
               </a>
            </div>
         </div>
      </section>

      {/* Contact Section (Footer) */}
      <section id="contact" className="w-full bg-[#4A148C] py-8 md:py-12 relative overflow-hidden text-white">
         <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-[#6A1B9A] rounded-full blur-[100px] opacity-50"></div>
         
         <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
            <h2 className="font-script text-4xl md:text-6xl mb-2 text-[#E1BEE7]">Terhubung</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">Siap membuat harimu lebih manis?</h3>
            <p className="text-[#D1C4E9] mb-6 text-base leading-relaxed max-w-lg">
               Konsultasikan keinginanmu atau langsung pesan menu favoritmu. Kami hanya berjarak satu klik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
               <a href="https://wa.me/6281313178454?text=Halo%20Admin%20Nexora%20Velveta%2C%20saya%20ingin%20bertanya%20info%20lebih%20lanjut" className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE57] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-green-900/20 transition-all hover:-translate-y-1">
                  <span className="text-xl">💬</span>
                  <span>WhatsApp</span>
               </a>
               <a href="https://instagram.com/nexoravelveta_" className="flex items-center gap-3 bg-white text-[#4A148C] hover:bg-gray-100 px-6 py-3 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-xl">📸</span>
                  <span>Instagram</span>
               </a>
            </div>
            
            <div className="text-xs text-[#B39DDB]">
               © {new Date().getFullYear()} RaaLyy.
            </div>
         </div>
      </section>
    </div>
  );
}
