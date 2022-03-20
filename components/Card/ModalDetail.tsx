import { ICard } from './Card';

interface Props {
  data: ICard;
}

export default function ModalDetail(props: Props) {
  const {
    data: { id, cover, description, subtitles, title },
  } = props;
  return (
    <>
      <input className="modal-state" id={id} type="checkbox" />
      <div className="modal">
        <label className="modal-bg" htmlFor={id}></label>
        <div className="modal-body">
          <label className="btn-close" htmlFor={id}>
            X
          </label>
          <h4 className="modal-title">{title}</h4>
          <h5 className="modal-subtitle">
            {subtitles.map((subtitle, index) => {
              if (index !== subtitles.length - 1) {
                return <span key={subtitle}>{subtitle}, </span>;
              }
              return <span key={subtitle}>{subtitle}</span>;
            })}
          </h5>

          <div
            className="modal-text"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <label htmlFor={id} className="paper-btn">
            Close
          </label>
        </div>
      </div>
    </>
  );
}
