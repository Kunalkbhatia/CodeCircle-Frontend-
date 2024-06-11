interface ButtonIdtype {
  id: Number;
  setId: (id: number) => void;
  index: number;
  heading: String;
}
const FeatureButton = ({ id, setId, index, heading }: ButtonIdtype) => {
  return (
    <button
      className={
        "md:text-xl text-2xl p-3 rounded-full font-Gilroy_Light font-bold hover:bg-buttonClicked-0 hover:text-white transition-all " +
        (id === index
          ? "bg-buttonClicked-0 text-white"
          : "bg-buttonInitital-0")
      }
      onClick={() => setId(index)}
    >
      {heading}
    </button>
  );
};

export default FeatureButton;
