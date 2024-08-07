export default function TopSide() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <img
          src="https://images.ecestaticos.com/mFAaOODTfcViaN31oXOw5H5Ymmg=/0x0:2272x1515/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc4b%2F5c3%2Fd76%2Fc4b5c3d76412547eb8c6ddc677f90fc3.jpg"
          alt="Novia y el novio disfrutando de su amor"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="font-dancing-script relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-20">
          <p className="text-8xl mb-10 ">♥</p>
          <h4 className="text-3xl  text-center">
            Tenemos el Honor de invitarte a nuestra boda
          </h4>
          <h1 className="text-6xl mt-10">Javier </h1>
          <h1 className="text-6xl mt-2">&mdash; & &mdash;</h1>
          <h1 className="text-6xl mt-2">Maria</h1>
        </div>
      </div>
    </>
  );
}
