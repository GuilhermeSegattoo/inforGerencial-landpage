interface Props {
  icon: React.ReactNode;
  title: string;
  number: number;
  children: React.ReactNode;
}

export const Step = ({ icon, title, number, children } : Props) => {
 return (
  <div className="flex justify-center  py-7">
    <div className="flex flex-wrap md:flex-nowrap items-center justify-center">
      <div className="text-white text-7xl mr-10">{icon}</div>
      <div>
        <h4 className="text-pink-600">PASSO {number}</h4>
        <h3 className="text-white font-bold text-2xl">{title}</h3>
        <p className="text-white mt-4 text-justify">{children}</p>
      </div>
    </div>
  </div>
 )
}