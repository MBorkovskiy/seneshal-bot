import { useEffect, useState } from "react";
import "./showcase.css";
import axios from "axios";
import { Loader } from "../../components/Loader/Loader";

interface IImages {
  original_filename: string;
  original_file_url: string;
}

export const Showcase = () => {
  const [category, setCategory] = useState<Record<string, IImages[]>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://api.uploadcare.com/files/", {
          headers: {
            Authorization:
              "Uploadcare.Simple 00b8b012e08bb4580e0d:5261ebbd82c8da5867dc",
          },
        });
        const category: Record<string, IImages[]> = {};
        response.data.results.forEach((el: IImages) => {
          const categoryName = el.original_filename.split("-")?.[0];
          category[categoryName] = [...(category[categoryName] ?? []), el];
        });

        setCategory(category);
      } catch (error) {
        console.error("Ошибка при получении файлов:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="showcase-wrapper">
      {Object.keys(category)?.map((cat) => (
        <div key={cat}>
          <p>{cat}</p>
          <div className="category-images">
            {category[cat]?.map((img) => (
              <img
                key={img.original_file_url}
                src={img.original_file_url}
                alt=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
