import classes from './BlogCard.module.css';

export default function BlogCard() {
  return (
    <div className="overflow-hidden rounded-xl bg-slate-50">
      <div className="p-3">
        <p className="mb-3 text-sm uppercase text-slate-500">AUGust 13, 2021</p>
        <h4 className="font-serif text-lg font-bold  text-slate-800">
          10 Hilarious Cartoons That Depict Real-Life Problems of Programmers
        </h4>
      </div>
      <div>
        <img
          className={classes.imageCover}
          src="https://dummyimage.com/600x400/000/fff"
          alt="image"
        />
      </div>
    </div>
  );
}
