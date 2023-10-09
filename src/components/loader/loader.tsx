import classes from "./loader.module.scss";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={classes.ldsGrid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;
