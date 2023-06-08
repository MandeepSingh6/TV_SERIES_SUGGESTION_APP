import s from "./style.module.css";

const Logo = ({ img, title, subtitle }) => {
  return (
    <>
      <div className={s.logo_container}>
        <img className={s.img} src={img} alt={title} />
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
};

export default Logo;
