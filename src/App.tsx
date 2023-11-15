import "./App.css";
import Card from "../src/components/Card";

function App() {
  const blogs = [
    {
      id: 1,
      pictureURL: "https://fotbolti.net/images/news/639000/639890/700w.jpg",
      category: "Þýskaland",
      paragraph: "Harry Kane með sturlað mark fyrir aftan miðju gegn Dramstadt",
    },
    {
      id: 2,
      pictureURL: "https://fotbolti.net/images/news/565000/565405/700w.jpg",
      category: "Spánn",
      paragraph: "Markaþurrð hjá Lewandowski - ekki gerst síðan 2010",
    },
    {
      id: 3,
      pictureURL: "https://fotbolti.net/images/news/652000/652718/700w.jpg",
      category: "Evrópa",
      paragraph:
        "Einkunnir Dortmund og Newcastle: Hall slakur í fyrsta Meistaradeildarleiknum",
    },
    {
      id: 4,
      pictureURL: "https://fotbolti.net/images/news/652000/652719/700w.jpg",
      category: "Evrópa",
      paragraph: "Haaland stóð við orð sín og tók drogba-fagnið",
    },
    {
      id: 5,
      pictureURL: "https://fotbolti.net/images/news/596000/596701/700w.jpg",
      category: "Ítalía",
      paragraph: "Milan í viðræðum við Zlatan",
    },
    {
      id: 6,
      pictureURL: "https://fotbolti.net/images/news/621000/621401/700w.jpg",
      category: "Ísland",
      paragraph: "Aðstoðarþjálfaramálin: Ókláraður kapall",
    },
    {
      id: 7,
      pictureURL: "https://fotbolti.net/images/news/591000/591140/700w.jpg",
      category: "England",
      paragraph: "Jón Daði kom inn af bekknum í sigri Bolton",
    },
    {
      id: 8,
      pictureURL: "https://fotbolti.net/images/news/451000/451603/700w.jpg",
      category: "Evrópa",
      paragraph: "Pepe elstur til að skora í Meistaradeildinni",
    },
  ];

  const Align: React.CSSProperties = {
    margin: "4rem auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1500px",
    padding: "0 30px",
  };

  return (
      <div style={Align}>
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <Card
                pic={blog.pictureURL}
                category={blog.category}
                text={blog.paragraph}
              ></Card>
            </div>
          );
        })}
      </div>
  );
}

export default App;
