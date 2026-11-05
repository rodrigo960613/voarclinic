import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Picture } from "./Picture";
import { clinic } from "../data/clinic";
import { posts } from "../data/instagram";
import { asset, toObjectUrl } from "../assets";
import "./InstagramFeed.css";
export function InstagramFeed() {
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    const url = toObjectUrl(asset("/video/tour-clinica.mp4"));
    setVideoSrc(url);
    return () => {
      if (url.startsWith("blob:")) URL.revokeObjectURL(url);
    };
  }, []);
  return <section id="conteudos" className="section insta" aria-labelledby="conteudos-titulo">
      <div className="container insta__grid">
        <div className="insta__video">
          <video
    controls
    playsInline
    preload="metadata"
    poster={asset("/images/video-capa.jpg")}
    width={360}
    height={640}
    aria-label="Vídeo de apresentação: passeio pela Voar Clinic"
    src={videoSrc || void 0}
  >
            Seu navegador não reproduz vídeos. Você pode acompanhar a clínica pelo Instagram.
          </video>
        </div>

        <div className="insta__copy">
          <h2 id="conteudos-titulo">Conheça a clínica por dentro.</h2>
          <p className="insta__lead">
            Um passeio pela fachada, pelas salas de atendimento e pelos cantinhos preparados para receber cada paciente.
          </p>
          <a className="insta__handle" href={clinic.instagram.url} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size={30} strokeWidth={1.6} />
            <span>@{clinic.instagram.handle}</span>
          </a>
          <p className="insta__text">Acompanhe as novidades e os conteúdos da Voar Clinic no Instagram.</p>
          <Button href={clinic.instagram.url} external variant="dark" size="lg" icon="external">
            Veja mais no Instagram
          </Button>
        </div>
      </div>

      {posts.length > 0 && <div className="container">
          <ul className="insta__posts">
            {posts.map((p) => <li key={p.url}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="post">
                  <Picture src={p.image.replace(/\.(jpg|jpeg|png|webp)$/i, "")} alt={p.imageAlt} width={640} height={640} />
                  <span className="post__body">
                    <strong>{p.title}</strong>
                    <span>{p.summary}</span>
                    <span className="post__more">
                      Ver publicação <Icon name="external" size={14} />
                    </span>
                  </span>
                </a>
              </li>)}
          </ul>
        </div>}
    </section>;
}
