import "./App.css";
import Header from "./Header";
import Imagem from "./Imagem";
import Title from "./Title";
import Paragrafo from "./Paragrafo";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header text="Meu Diário Reprograma" />
      <section className="section">
        <div className="container-sobre-mim">
          <Imagem src="../src/assets/img_autora.jpeg" />
          <span className="container-sobre-mim-texto">
            <Title text="Prazer, Tamires" />
            <Paragrafo text="Sou aluna de front-end na reprograma, na turma On17. Fiz transição de carreira para a área de tecnologia e atualmente trabalho como Software Engineer Trainee na Creditas." />
          </span>
        </div>
        <hr />
        <div className="container-aprendizados">
          <Title text="4 aprendizados na reprograma" />
          <div className="aprendizados-cards">
            <span className="container-cards">
            <Card titulo="HTML" src="https://c.tenor.com/0VILJG2ki4kAAAAC/gif.gif" text="O HTML foi uma das primeiras ferramentas de desenvolvimento que eu tive contato, no começo eu apanhei um pouco, mas hoje já somos melhores amigos"/>
            <Card titulo="CSS" src="https://i.pinimg.com/originals/f4/2d/36/f42d36ef96e69be9adcfd4fb4c077508.gif" text="O CSS as vezes é meio difícil e vive me trollando, mas com muuuuuuita calma e paciência (muita mesmo! risos) a gente vai se entendendo. "/>
            </span>
            <span className="container-cards" >
            <Card titulo="JavaScript" src="https://i.gifer.com/Xsvv.gif" text="O Javascript pra mim ainda é um desafio, é uma humilhação atrás da outra rs, mas na maioria das vezes a gente se entende também."/>
            <Card titulo="React" src="https://c.tenor.com/YAOhbZ5GZy4AAAAC/nazar%C3%A9.gif" text="O React....só jesuis na causa...."/>
            </span>
          </div>
        </div>
      <Footer  text='Desenvolvido por Tamires Cristina'/>
      </section>
    </>
  );
}

export default App;
