export default function Loader({ hidden }) {
  return (
    <div className={`loader${hidden ? ' loader-hidden' : ''}`} id="loader">
      <div>
        <img src="/images/gato.webp" alt="Welcome!!" className="cat" />
      </div>
      <div>
        <a> Welcome</a>
      </div>
    </div>
  );
}
