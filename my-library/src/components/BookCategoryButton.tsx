import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
};

const BookCategoryButton = ({ onCategoryChange, selectedCategory }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <>
      {isAboveMediumScreen ? (
        <div className="mt-10 border-b border-gray-300 flex items-center">
          <button
            onClick={() => onCategoryChange("Finance")}
            className={`${
              selectedCategory === "Finance"
                ? "border-b-4 border-blue-600 px-6 font-bold text-[18px] py-2 text-gray-600"
                : "px-6 text-[18px] py-2 hover:bg-gray-100 transition duration-300 rounded-md"
            }`}
          >
            Finance
          </button>
          <button
            onClick={() => onCategoryChange("Science Fiction")}
            className={`${
              selectedCategory === "Science Fiction"
                ? "border-b-4 border-blue-600 px-6 font-bold text-[18px] py-2 text-gray-600"
                : "px-6 text-[18px] py-2 hover:bg-gray-100 transition duration-300 rounded-md"
            }`}
          >
            Science Fiction
          </button>
          <button
            onClick={() => onCategoryChange("Thriller")}
            className={`${
              selectedCategory === "Thriller"
                ? "border-b-4 border-blue-600 px-6 font-bold text-[18px] py-2 text-gray-600"
                : "px-6 text-[18px] py-2 hover:bg-gray-100 transition duration-300 rounded-md"
            }`}
          >
            Thriller
          </button>
          <button
            onClick={() => onCategoryChange("Software")}
            className={`${
              selectedCategory === "Software"
                ? "border-b-4 border-blue-600 px-6 font-bold text-[18px] py-2 text-gray-600"
                : "px-6 text-[18px] py-2 hover:bg-gray-100 transition duration-300 rounded-md"
            }`}
          >
            Software
          </button>
          <button
            onClick={() => onCategoryChange("Insurance")}
            className={`${
              selectedCategory === "Insurance"
                ? "border-b-4 border-blue-600 px-6 font-bold text-[18px] py-2 text-gray-600"
                : "px-6 text-[18px] py-2 hover:bg-gray-100 transition duration-300 rounded-md"
            }`}
          >
            Insurance
          </button>
        </div>
      ) : (
        <div>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onCategoryChange(e.target.value)
            }
            name="categories"
            className="w-[150px] h-[50px] border border-blue-400 bg-blue-50 outline-none mb-4 mt-2 pl-2"
          >
            <option value="Finance">Finance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller">Thriller</option>
            <option value="Software">Software</option>
            <option value="Insurance">Insurance</option>
          </select>
        </div>
      )}
    </>
  );
};

export default BookCategoryButton;
