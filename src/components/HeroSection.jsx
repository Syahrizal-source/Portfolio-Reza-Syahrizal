import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, Saya</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Reza
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Syahrizal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Seorang fullstack developer memiliki kemampuan untuk bekerja dengan berbagai teknologi dan bahasa pemrograman, seperti HTML, CSS, JavaScript untuk front-end, serta Node.js, Python, atau Ruby untuk back-end. Fullstack development sangat diminati di industri teknologi karena fleksibilitas dan kemampuan untuk menyelesaikan berbagai tugas. Dalam era digital saat ini, keterampilan ini menjadi aset berharga bagi perusahaan yang ingin mengembangkan produk yang inovatif. Dengan terus belajar dan beradaptasi dengan teknologi baru, fullstack developer dapat tetap relevan dan kompetitif di pasar kerja.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              melihat pekerjaan saya
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};