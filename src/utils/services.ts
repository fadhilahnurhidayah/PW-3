import { Services } from "@/types/type";
import Image1 from "../../public/images/services/list/serviceList_1.jpg";
import Image2 from "../../public/images/services/list/serviceList_2.jpg";
import Image3 from "../../public/images/services/list/serviceList_3.jpg";
import Image4 from "../../public/images/services/list/serviceList_4.jpg";

const services: Services[] = [
  {
    title: "Belajar dasar SQL",
    technologies: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "PL/SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Google Colab",
      "Jupyter Notebook",
      "Git",
    ],
    description:
      "With SQL, I'm able to combine my analytical thinking with my problem-solving skills...",
    image: Image2,
  },
  {
    title: "Belajar Data Science",
    technologies: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Jupyter Notebook",
    ],
    description:
      "I'm currently learning the fundamentals of data science...",
    image: Image1,
  },
  {
    title: "Memulai Pemrograman dengan Python",
    technologies: ["Python", "Jupyter Notebook", "Google Colab", "Variables & Data Types", "Control Flow", "Functions"],
    description:
      "I started learning programming with Python...",
    image: Image3,
  },
  {
    title: "Dasar Visualisasi Data",
    technologies: ["Matplotlib", "Seaborn", "Pandas", "Data Cleaning", "Data Visualization"],
    description:
      "I'm currently learning the fundamentals of data visualization...",
    image: Image4,
  },
  {
    title: "Dasar Dasar AI",
    technologies: ["Matplotlib", "Seaborn", "Pandas", "Data Cleaning", "Data Visualization"],
    description:
      "I'm currently learning the fundamentals of AI",
    image: Image4,
  },
];

export const allServices: Services[] = services.map((item, i) => ({
  ...item,
  id: i + 1,
}));
