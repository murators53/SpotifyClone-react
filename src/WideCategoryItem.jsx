function WideCategory({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-lg relative w-[27.385rem] h-[13.75rem] flex-shrink-0"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
          {category.title}
        </h3>
        <img
          src={category.cover}
          className="shadow-spotifyshdw w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
export default WideCategory;
