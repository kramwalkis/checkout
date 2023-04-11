import Cell from "../components/layouts/Cell";

let colors: string[] = [];
for (let i = 0; i < 120; i++) {
  colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
}

const NotFound = () => {
  return (
    <div className="flex-col flex justify-center items-center">
      <div className="h-0 w-0 relative">
        {colors.map((item, index) => {            
          return (
            <Cell key={index} backgroundColor={item} size={8} zIndex={index} />
          );
        })}
      </div>
        <div className="text-center font-bold text-xl" style={{zIndex: 999}}>404 page not found</div>
    </div>
  );
};

export default NotFound;
