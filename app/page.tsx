"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";




export default function LandingPage() {
  return (
    <div className="min-h-screen font-poppins text-[#4B2E05] bg-[url('/images/fondo3.jpg')] bg-[#F5EEE6]">

      {/* ✅ NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4B2E05]/90 backdrop-blur-md text-[#F5EEE6] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-2xl font-semibold tracking-wide cursor-pointer"
          >
            Dogo Café
          </motion.h1>
          <ul className="flex space-x-6 text-sm uppercase font-medium tracking-wide">
            {[
              { name: "Inicio", id: "inicio" },
              { name: "Nosotros", id: "nosotros" },
              { name: "Menú", id: "menu" },
              { name: "Eventos", id: "eventos" },
              { name: "Galería", id: "galeria" },
              { name: "Ubicación", id: "ubicacion" },
            ].map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1, color: "#E1A74A" }}
                className="cursor-pointer transition-colors duration-200"
              >
                <Link to={item.id} smooth={true} offset={-80} duration={500}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>


      {/* ✅ HERO */}
      <section
        id="inicio"
        className="h-screen bg-[url('/images/hero-cafe.jpeg')] bg-cover bg-center relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#4B2E05]/70 to-[#4B2E05]/40"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-[#F5EEE6] px-4"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Dogo Café
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Café de especialidad, pan artesanal y un ambiente que te invita a quedarte.
            Somos una cafetería artesanal en Orizaba, reconocida por tener la
            “Mejor Barra del 2024”.
          </p>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            className="bg-[#E1A74A] text-[#4B2E05] px-6 py-3 rounded-full shadow-md font-semibold cursor-pointer"
          >
            Conoce nuestro menú
          </motion.a>
        </motion.div>
      </section>


      {/* ✅ SOBRE NOSOTROS (SECCIÓN CORREGIDA) */}
      <section id="nosotros" className="py-24 px-6 max-w-6xl mx-auto">
        
          {/* Contenedor principal con flexbox para la imagen y el texto/cifras */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Columna de la Imagen */}
            <div className="w-full lg:w-1/2 relative">
              {/* Contenedor para simular la forma de la imagen de la captura */}
              <div className="absolute inset-0 bg-[#EDE2D1] rounded-tl-full rounded-br-full z-0 opacity-50"></div>
              <img
                // Usando logoDogo.jpeg como solicitaste
                src="/images/logoDogo.jpeg" 
                alt="Barista de Dogo Café"
                className="relative z-10 w-full h-auto object-cover rounded-xl shadow-2xl"
              />
            </div>

            {/* Columna del Texto y Cifras */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-playfair text-4xl mb-4 text-[#4B2E05]"
              >
                Nuestra pasión nos hace crecer
              </motion.h3>
              
              {/* Texto de la historia - Adaptado para ser más conciso */}
              <p className="text-[#5B4A3A] text-lg leading-relaxed mb-8">
                Dogo Café nació del amor por el café de especialidad y el deseo de crear un espacio donde las personas se sientan como en casa. Nuestro compromiso con la calidad nos ha hecho acreedores al premio "Mejor Barra del 2024". Más que una cafetería, somos una comunidad.
              </p>

              {/* Cifras - Layout similar a la captura (grid) */}
              <div className="grid grid-cols-2 gap-4 max-w-lg lg:max-w-none mx-auto">
                
                {/* Bloque de Cifra (Ejemplo: Años de experiencia) */}
                <motion.div 
                  whileHover={{ scale: 1.05 }} // ✅ Solo animación de hover
                  className='bg-[#F5EEE6] p-4 rounded-lg shadow-md border border-[#E1A74A]/30' 
                >
                  <p className="text-3xl font-bold text-[#E1A74A]">+ 05</p>
                  <p className="text-sm text-[#4B2E05]">Años de pasión</p>
                </motion.div>

                {/* Bloque de Cifra (Ejemplo: Blends de café) */}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className='bg-[#F5EEE6] p-4 rounded-lg shadow-md border border-[#E1A74A]/30' 
                >
                  <p className="text-3xl font-bold text-[#E1A74A]">04</p>
                  <p className="text-sm text-[#4B2E05]">Mezclas de café</p>
                </motion.div>
                
                {/* Bloque de Cifra (Ejemplo: Ciudades) */}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className='bg-[#F5EEE6] p-4 rounded-lg shadow-md border border-[#E1A74A]/30' 
                >
                  <p className="text-3xl font-bold text-[#E1A74A]">01</p>
                  <p className="text-sm text-[#4B2E05]">Ciudad</p>
                </motion.div>

                {/* Bloque de Cifra (Ejemplo: Cafeterías/Sucursales) */}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  className='bg-[#F5EEE6] p-4 rounded-lg shadow-md border border-[#E1A74A]/30' 
                >
                  <p className="text-3xl font-bold text-[#E1A74A]">01</p>
                  <p className="text-sm text-[#4B2E05]">Cafeterías</p>
                </motion.div>

              </div>
              
            </div>
          </div>

        </section>


    
<section id="menu" className="py-24 px-6 bg-[#EDE2D1]">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="font-playfair text-4xl mb-6 text-[#4B2E05] font-bold"
    >
      Descubre Nuestro Menú de Especialidad
    </motion.h3>

    <p className="text-xl text-[#5B4A3A] leading-relaxed mb-12 max-w-3xl mx-auto">
      Cada sección de nuestro menú está curada con pasión. Desde granos
      premiados hasta panadería artesanal horneada cada mañana.
    </p>

    {/* ✅ CATEGORÍAS (Ahora con imágenes de fondo y diseño de tarjeta premium) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      
      {/* 1. Categoría CAFÉ */}
      <motion.div 
        whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
        className="relative h-64 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ backgroundImage: "url('/images/gallery-1.jpg')" }} // 🛑 Reemplazar URL
        />
        {/* Overlay para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-[#4B2E05]/60 flex flex-col justify-center items-center text-white p-4">
          <h3 className="font-playfair text-3xl font-bold mb-2 tracking-wider">
            Café
          </h3>
          <p className="text-sm opacity-90 text-center max-w-[80%]">
            Espresso galardonado, Lattes de autor y Cold Brew.
          </p>
        </div>
      </motion.div>

      {/* 2. Categoría PANADERÍA */}
      <motion.div 
        whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
        className="relative h-64 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ backgroundImage: "url('/images/pan.jpg')" }} // 🛑 Reemplazar URL
        />
        <div className="absolute inset-0 bg-[#4B2E05]/60 flex flex-col justify-center items-center text-white p-4">
          <h3 className="font-playfair text-3xl font-bold mb-2 tracking-wider">
            Panadería
          </h3>
          <p className="text-sm opacity-90 text-center max-w-[80%]">
            Croissants, brioches y pan artesanal fresco del día.
          </p>
        </div>
      </motion.div>

      {/* 3. Categoría POSTRES */}
      <motion.div 
        whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
        className="relative h-64 rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ backgroundImage: "url('/images/postre.jpg')" }} // 🛑 Reemplazar URL
        />
        <div className="absolute inset-0 bg-[#4B2E05]/60 flex flex-col justify-center items-center text-white p-4">
          <h3 className="font-playfair text-3xl font-bold mb-2 tracking-wider">
            Postres
          </h3>
          <p className="text-sm opacity-90 text-center max-w-[80%]">
            Tartaletas de temporada, pasteles y delicias caseras.
          </p>
        </div>
      </motion.div>
    </div>

    {/* Botón de descarga con estilo más prominente */}
    <motion.a
      href="/menuDogoCafe.pdf"
      download
      whileHover={{ scale: 1.05, backgroundColor: "#E1A74A", color: "#4B2E05" }}
      className="inline-block bg-[#4B2E05] text-[#F5EEE6] px-8 py-3 rounded-full shadow-lg font-semibold uppercase tracking-wide transition-all duration-300"
    >
      Ver Menú Completo (PDF)
    </motion.a>
  </div>
</section>

      {/* ✅ EVENTOS Y EXPERIENCIAS (AJUSTADO CON MENSAJES Y SCROLL OCULTO) */}
      <section id="eventos" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-playfair text-4xl mb-4 text-[#4B2E05] font-bold"
          >
             Dogo: ¡Más que Café, Es Comunidad!
          </motion.h3>

          <p className="text-[#5B4A3A] max-w-3xl mx-auto text-xl leading-relaxed mb-10">
            Únete a la vibra. Tómate un café con nosotros y vive las experiencias
            que conectan a Orizaba.
          </p>
        </div>

        {/* ✅ CARRUSEL HORIZONTAL DE EVENTOS (Scrollable oculto) */}
        {/* Aplicamos 'hide-scrollbar' y 'flex-nowrap' para asegurar el carrusel */}
        <div className="flex overflow-x-scroll flex-nowrap space-x-6 pb-4 pt-2 snap-x snap-mandatory hide-scrollbar">
          
          {/* --- TARJETA 1: COFFEE RIDE (Mensaje de acción) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-80 snap-center bg-[#4B2E05] text-[#F5EEE6] rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 text-left">
              <span className="bg-[#E1A74A] text-[#4B2E05] text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                Próximo
              </span>
              <h4 className="font-playfair text-3xl font-semibold mb-2">Coffee Ride 🚲</h4>
              
              <div className="flex justify-between items-center my-3 text-sm">
                <p>📍 Orizaba, Ruta 15 KM</p>
                <p>🗓️ 07 NOV</p>
              </div>

              <p className="text-sm opacity-80 mb-4">
                ¡Pedalea por la ciudad! Ruta para todos los niveles que termina con música y café en Dogo Café.
              </p>
              
              {/* ✅ Mensaje Alentador en lugar de botón */}
              <p className="text-center text-sm font-bold pt-3 border-t border-[#E1A74A]/50">
                ¡Solo llega y rueda! Te esperamos 6:00 PM.
              </p>
            </div>
          </motion.div>

          {/* --- TARJETA 2: NOCHE DE MICRÓFONO ABIERTO (Mensaje de acción) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-80 snap-center bg-[#F5EEE6] text-[#4B2E05] rounded-2xl shadow-xl overflow-hidden border border-[#E1A74A]/40"
          >
            <div className="p-6 text-left">
              <span className="bg-[#4B2E05] text-[#F5EEE6] text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                Social
              </span>
              <h4 className="font-playfair text-3xl font-semibold mb-2">Noche de Micrófono Abierto 🎤</h4>

              <div className="flex justify-between items-center my-3 text-sm">
                <p>📍 Dogo Café</p>
                <p>🗓️ 18 NOV</p>
              </div>

              <p className="text-sm opacity-80 mb-4">
                ¿Tienes talento? Comparte tu poesía, música o comedia con un café de especialidad en mano.
              </p>

              {/* ✅ Mensaje Alentador en lugar de botón */}
              <p className="text-center text-sm font-bold pt-3 border-t border-[#4B2E05]/50">
                ¡Tu voz es bienvenida!
              </p>
            </div>
          </motion.div>

          {/* --- TARJETA 3: TALLER DE ARTE LATTE (Mensaje de acción) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-80 snap-center bg-[#EDE2D1] text-[#4B2E05] rounded-2xl shadow-xl overflow-hidden border border-[#E1A74A]/40"
          >
            <div className="p-6 text-left">
              <span className="bg-[#4B2E05] text-[#F5EEE6] text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                Aprende
              </span>
              <h4 className="font-playfair text-3xl font-semibold mb-2">Taller de Arte Latte 🎨</h4>

              <div className="flex justify-between items-center my-3 text-sm">
                <p>📍 Dogo Café (Barra)</p>
                <p>🗓️ 02 DIC</p>
              </div>

              <p className="text-sm opacity-80 mb-4">
                Conviértete en barista por un día y aprende a dibujar corazones y tulipanes en tu café.
              </p>

              {/* ✅ Mensaje Alentador en lugar de botón */}
              <p className="text-center text-sm font-bold pt-3 border-t border-[#4B2E05]/50">
                ¡Cupo limitado! Pregunta por la inscripción.
              </p>
            </div>
          </motion.div>

          {/* --- TARJETA 4: CAPTURA TU MOMENTO DOGO (Mensaje de acción) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0 w-80 snap-center bg-[#F5EEE6] text-[#4B2E05] rounded-2xl shadow-xl overflow-hidden border border-[#E1A74A]/30"
          >
            <div className="p-6 text-left">
              <span className="bg-[#E1A74A] text-[#4B2E05] text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                Fotografía
              </span>
              <h4 className="font-playfair text-3xl font-semibold mb-2">Captura tu Momento Dogo 📸</h4>

              <div className="flex justify-between items-center my-3 text-sm">
                <p>📍 Instagram</p>
                <p>🗓️ Todo DICIEMBRE</p>
              </div>

              <p className="text-sm opacity-80 mb-4">
                Sube tu mejor foto en Dogo Café y gana un kit de café de especialidad y premios sorpresa.
              </p>

              {/* ✅ Mensaje Alentador en lugar de botón */}
              <p className="text-center text-sm font-bold pt-3 border-t border-[#4B2E05]/50">
                ¡Usa el hashtag #MomentoDogo!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Llama a la acción final */}
        <p className="text-[#4B2E05] mt-12 font-semibold text-lg">
          Para más detalles y horarios, síguenos en Instagram: <span className="text-[#E1A74A] font-bold">@dogocafe</span>
        </p>
      </section>

      {/* ✅ GALERÍA */}
      <section id="galeria" className="py-24 px-6 bg-[#EDE2D1]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="font-playfair text-4xl mb-10 text-[#4B2E05]">
            Galería
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "/images/gallery-1.jpg",
              "/images/gallery-2.jpg",
              "/images/gallery-3.jpg",
              "/images/gallery-4.jpg",
              "/images/gallery-5.jpg",
              "/images/gallery-6.jpg",
            ].map((src, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.05 }}
                src={src}
                className="w-full h-60 object-cover rounded-2xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>


      {/* ✅ UBICACIÓN */}
      <section id="ubicacion" className="py-24 px-6 text-center max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-playfair text-4xl mb-8 text-[#4B2E05]"
        >
          Ubicación y Contacto
        </motion.h3>

        <p className="text-[#5B4A3A] mb-8">
          📍 Oriente 4-A entre sur 23 y 25, Orizaba, Veracruz  
          <br /> 🕒 Lunes a domingo de 7:00 a.m. a 9:00 p.m.
        </p>

        <iframe
          className="w-full h-96 rounded-2xl shadow-lg border border-[#E1A74A]/40"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7551.508721183!2d-97.0986163376424!3d18.85358683216841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c503adb34c834d%3A0xa364b570bca8ee3a!2zQ2Fmw6kgY2Fmw6kgYmlzdHJv!5e0!3m2!1ses-419!2smx!4v1762492168749!5m2!1ses-419!2smx"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>


      {/* ✅ FOOTER */}
      <footer className="bg-[#4B2E05] text-[#F5EEE6] py-10 text-center">
        <p className="font-playfair text-lg mb-2">
          Dogo Café — Human Friendly OZ.MX
        </p>
        <p className="text-sm opacity-80">
          Café de especialidad | Pan artesanal | Comunidad  
        </p>
        <p className="text-sm opacity-60 mt-3">
          © {new Date().getFullYear()} Dogo Café. Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
}