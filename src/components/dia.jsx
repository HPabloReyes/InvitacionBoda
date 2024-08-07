export default function Dia() {
  return (
    <>
      <div className="flex flex-col items-center my-1">
        <img src="/iglesia.png" className="mb-4 opacity-90" alt="Iglesia" />
        <div className="flex flex-col items-center text-center space-y-4 px-8">
          <h3 className="text-3xl font-semibold mt-0 italic">
            28 | Sep | 2024
          </h3>
          <p className="text-lg italic font-pacifico">
            Parroquia San Pablo Apóstol 12 pm
          </p>
          <a
            href="https://www.google.com/maps/place/Parroquia+de+San+Pablo+Ap%C3%B3stol/@19.1195641,-98.1711674,15z/data=!4m6!3m5!1s0x85cfc236ae5924db:0x2dd4ce0b53dd869a!8m2!3d19.1195641!4d-98.1711674!16s%2Fg%2F11c46883w1?entry=ttu"
            className="font-dancing-script font-bold inline-block px-6 py-1 mt-6 text-lg  bg-gradient-to-r from-red-50 via-white to-red-50 rounded-2xl shadow-xl "
          >
            Ver la ubicación
          </a>
        </div>
      </div>
    </>
  );
}
