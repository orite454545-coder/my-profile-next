
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-cyan-400">
          MY PROFILE
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">หน้าหลัก</a>
          <a href="#about" className="hover:text-cyan-400">เกี่ยวกับ</a>
          <a href="#contact" className="hover:text-cyan-400">ติดต่อ</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6"
      >
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-5xl font-bold mb-8 shadow-lg shadow-cyan-500/20">
          S
        </div>

        <p className="text-cyan-400 tracking-[0.3em] mb-4">
          WELCOME TO MY WEBSITE
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-5">
          สวัสดีครับ ผมชื่อเสริมชัย
        </h2>

        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
          นักเรียนสาขาเทคโนโลยีธุรกิจดิจิทัล
          <br />
          ผู้ที่สนใจเทคโนโลยี การเขียนโปรแกรม และการเล่นเกม
        </p>

        <a
          href="#about"
          className="mt-8 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition"
        >
          รู้จักผมเพิ่มเติม
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">
          เกี่ยวกับผม
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">ข้อมูลส่วนตัว</h3>
            <p className="text-gray-400 leading-8">
              ชื่อ: เสริมชัย
              <br />
              อายุ: 18 ปี
              <br />
              สาขา: เทคโนโลยีธุรกิจดิจิทัล
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">ความสนใจ</h3>
            <p className="text-gray-400 leading-8">
              • การเขียนเว็บไซต์
              <br />
              • เทคโนโลยีและคอมพิวเตอร์
              <br />
              • การเล่นเกม
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">ติดต่อ</h2>
        <p className="text-gray-400">
          ยินดีที่ได้รู้จัก และขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ของผม
        </p>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-slate-800">
        © 2026 My Profile. All rights reserved.
      </footer>
    </main>
  );
}
