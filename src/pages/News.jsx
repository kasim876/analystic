import styles from "./News.module.scss";

import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import NewsArticle from "../components/NewsArticle/NewsArticle";

const News = () => {
  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="content">
        <Header title="Новости" />
        <main>
          <h2 className="subtitle">Последние новости</h2>
          <ul className={"list-reset" + ' ' + styles.list}>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
            <li>
              <NewsArticle title="Название новости" date="22.01.2022" datetime="2022-01-22">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.<br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus magnis mattis volutpat id magna enim dui, ornare sagittis. Netus magnis mattis volutpat id magna enim dui, ornare sagittis.
              </NewsArticle>
            </li>
          </ul>
        </main>
      </div>
    </div>
  )
}

export default News
